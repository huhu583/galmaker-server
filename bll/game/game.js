var util = require('../../common/util')
var game = require('../../dal/game/game')

module.exports = {
    // 创建游戏接口
    createGame: (gameObj) => {
        // 这里首先要判断当前游戏是否已经存在（不允许出现相同的游戏名）

        // 没有重名的话,动态生成一个Guid
        gameObj.gameId = util.createGuid()

        return new Promise((resolve, reject)=> {
            new game(gameObj).save((err)=> {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(gameObj)
                }
            })
        })
    },

    // 根据用户ID获取,当前用户创建的所有游戏列表
    getCreateGameList: (userId) => {
        return new Promise((resolve, reject)=> {
            game.find({
                creator: userId
            }, (err, res)=> {
                if(err) {
                    reject(err)
                }
                else if(res != null) {
                    resolve(res)
                }
                else {
                    resolve(null);
                }
            })
        })
    },

    // 根据游戏ID列表获取所有游戏
    getGameListByIdList: (idList) => {
        return new Promise((resolve, reject)=> {
            // 这里查一下mongose

            // game.find({
            //     creator: userId
            // }, (err, res)=> {
            //     if(err) {
            //         reject(err)
            //     }
            //     else if(res != null) {
            //         resolve(res)
            //     }
            //     else {
            //         resolve(null);
            //     }
            // })
        })
    }
}