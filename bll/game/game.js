var util = require('../../common/util')
var game = require('../../dal/game/game')

module.exports = {
    createGame: (gameObj) => {
        // 这里首先要判断当前用户名是否已经存在（不允许出现相同的用户名）

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
    }
}