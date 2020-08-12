var express = require('express')
var user = require('./bll/user/user')
var response = require('./response')

// Express提供了一种更好的方式
// 专门用来包装路由
var router = express.Router()

// 传入用户名和密码,返回对应的字符串（加密）
router.post('/user/login', (req, res) => {
    user.login(req.body).then((data) => {
        res.send(response(data))
    }, (err) => {
        res.status(500).send(err)
    })
})

// 注册新用户
router.post('/user/create', function (req, res) {
    user.create(req.body).then((data) => {
        res.send(response(data))
    }, (err) => {
        res.status(500).send(err)
    })
})

module.exports = router
