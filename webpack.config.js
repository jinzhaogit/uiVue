// 配置文件，因为webpack是基于node的，所以支持node语法
const path=require('path')
// 这个配置文件，其实就是一个js文件，通过node中的模块操作，向外暴露一个配置对象
const webpack=require('webpack')
// 导入在内存中生成HTML文件的插件
// 只要是插件，都一定要放到plugins节点中去
const htmlWebpackPlugin=require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports={
    // 在配置文件中，需要手动指定出口和入口
    entry:path.join(__dirname,'./src/main.js'), //入口表示要使用webpack打包哪个文件
    output:{ //输出文件相关配置
        path:path.join(__dirname,'./dist'), //指定打包好的文件输出到哪个目录中去
        filename:'bundle.js' //指定输出文化的名称
    },
    devServer:{ //这里配置dev-server命令的第二种形式，相对来说比较麻烦些
        open:false, //自动打开浏览器
        port:3000, //设置启动时候的运行端口
        contentBase:'src', //确定托管的根目录
        hot:true //启用热更新
    },
    plugins:[ //配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //new一个热更新模块
        new htmlWebpackPlugin({ //创建一个内存中生成HTML页面插件
            template:path.join(__dirname,'./src/index.html'), //指定模板页面，将来会根据指定页面
            filename:'index.html' //指定生成页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{ //这个节点用于匹配配置所有第三方模块加载器
        rules:[ //所有第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']}, //匹配处理.css文件的第三方loader规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//匹配处理.less文件的第三方loader规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}, //匹配处理.sass文件
            {test:/\.(jpg|png|jepg|gif|bmp)$/,use:'url-loader?limit=11665&name=[hash:8]-[name].[ext]'},//处理图片路径loader
            // ？传参limit给定的值是图片的大小，单位是byte，如果引用的图片大于或等于给定的limit值，则不会转成base64格式的字符串，
            // 如果图片小于给定的limit值，则会被转为base64格式
            {test:/\.(eot|svg|ttf|woff|woff2)$/,use:'url-loader'},//处理字体文件
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//处理es6高级语法
            {test:/\.vue$/,use:'vue-loader'}
        ]
    }
}