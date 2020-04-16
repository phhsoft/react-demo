var path = require("path");
module.exports = {
    entry:{
        app:["./src/index.js"]  //入口文件
    },
    output:{
        path:path.resolve(__dirname,"dist"), //出口目录，绝对路径
        filename:"bundle.js"  //出口文件名字 也可以使用 filename:"[name].js"，会根据entry下面的key值进行文件名命名
    },
    mode: 'development', //设置mode
    module: {
        rules: [
            {
                test:  /\.js$/,                //babel-loader将其他文件解析为js文件
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015","react"]  //babel-loader需要解析的文件
                }
            }
        ]
    }
}