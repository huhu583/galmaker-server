var express = require('express')
var router = require('./router')
const bodyParser = require('body-parser')

// 相当于http.createServer
var app = express()

//设置跨域访问
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
})

// 提供静态资源服务,公开指定目录
app.use('/public/', express.static('./public/'))

// 配置bodyparser一定要在挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// 把路由容器挂载到app服务中
app.use(router)

app.listen(5837, ()=> {
    console.log("欧尼酱，我已经运行起来了")
})