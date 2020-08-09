var express = require('express')
var user = require('./bll/user/user')

// Express提供了一种更好的方式
// 专门用来包装路由
var router = express.Router()

router.get('/huhu', (req, res) => {
    res.send(JSON.parse('{"text":"hello world"}'))
})

// 传入用户名和密码,返回对应的字符串（加密）
router.get('/user/login', (req, res) => {
    user.login(req.body).then((data) => {
        res.send(data)
    }, (err) => {
        res.status(500).send(err)
    })
})

// 注册新用户
router.post('/user/create', function (req, res) {
    user.create(req.body).then((data) => {
        res.send(data)
    }, (err) => {
        res.status(500).send(err)
    })
})

module.exports = router
