var mongoose = require('mongoose')
const Schema = require('../../mongodb')

var gameSchema = new Schema({
    // 游戏ID
    gameId: {
        type: String,
        required: true
    },
    // 游戏名称
    name: {
        type: String,
        required: true
    },
    // 热度
    hot: {
        type: Number,
    },
    // 标签（字符串数组）
    tips: {
        type: Array,
    },
    // 介绍
    introduce: {
        type: String,
    },
});

module.exports = mongoose.model("Game", gameSchema)