//(1)配置webpack 将main.js脱管到内存中更名为bundle.js
const path=require('path');
//(2)配置html-webpack-plugin  将index.html脱管到内存中
const htmlwebpackplugin=require('html-webpack-plugin');
module.exports={
    //(1)
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    //(2)
    plugins:[
        new htmlwebpackplugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],   
    module:{
        rules:[
             //(3)css匹配规则
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            //(4.1)图片url路径匹配规则
            {
                test:/\.(jpg|png|gif|bmp|jpeg)$/,
                use:'url-loader?limit=7000&name=[hash:8]-[name].[ext]'//大小限制，命名规则
            },
            //(4.2)字体url路径匹配规则
            {
                test:/\.(ttf|otf|eot|svg|woff|woff2)$/,
                use:'url-loader'
            },
            //(5)配置babel，将高级ES6/ES7语法转换为浏览器可以解析的低级语法
            // {
            //     test:/\.js$/,
            //     use:'babel-loader',
            //     exclude:/node_modules/
            // }
        ]
    }
    
}
