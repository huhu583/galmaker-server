var express = require('express')
var router = require('./router')
const bodyParser = require('body-parser')

// 相当于http.createServer
var app = express()

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