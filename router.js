var express = require('express')
// Express提供了一种更好的方式
// 专门用来包装路由
var router = express.Router()

router.get('/', (req, res)=> {
    res.send("hello world");
})

router.get('/login', (req, res)=> {
    res.send("你登录啊！");
})

router.get('/login1', (req, res)=> {
    res.send("登录！");
})
router.get('/login2', (req, res)=> {
    res.send("登录！");
})

module.exports = router
