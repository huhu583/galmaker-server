var express = require('express')
var user = require('./bll/user/user')
var game = require('./bll/game/game')
var tip = require('./bll/tip/tip')
var response = require('./response')
const { rawListeners } = require('./dal/tip/tip')

// Express提供了一种更好的方式
// 专门用来包装路由
var router = express.Router()

//#region 用户操作相关路由

// 传入用户名和密码,返回对应的字符串（加密）
router.post('/user/login', (req, res) => {
    user.login(req.body).then((data) => {
        res.send(response(data))
    }, (err) => {
        res.status(500).send(err)
    })
})

// 注册新用户
router.post('/user/create', (req, res) => {
    user.create(req.body).then((data) => {
        res.send(response(data))
    }, (err) => {
        res.status(500).send(err)
    })
})

//#endregion

//#region 游戏列表相关路由

router.post('/game/create', (req, res) => {
    game.createGame(req.body).then((data) => {
        res.send(response(data))
    },(err)=> {
        res.status(500).send(err)
    })
})

router.get('/game/getCreateGameList', (req, res)=> {
    // 这里传入userId
    game.getCreateGameList(req.query.userId).then((data) => {
        res.send(response(data))
    },(err)=> {
        res.status(500).send(err)
    })
})

// 根据游戏ID列表获取所有游戏（用户收藏游戏）
router.post('game/getGameListByIdList', (req, res) => { 
    game.getGameListByIdList(req.body).then((data) => {
        res.send(response(data))
    },(err)=> {
        res.status(500).send(err)
    })
})

//#endregion

//#region 

router.get('/game/getAllTips', (req, res) => {
    tip.getAllTips().then((data)=>{
        res.send(response(data))
    }, (err)=>{
        res.status(500).send(err)
    })
})

//#endregion

module.exports = router
