var user = require('../../dal/user/user')
var util = require('../../common/util')

module.exports = {
    // 注册新用户
    create: (userObj) => {
        // 这里首先要判断当前用户名是否已经存在（不允许出现相同的用户名）

        // 没有重名的话,动态生成一个Guid
        userObj.userId = util.createGuid()

        return new Promise((resolve, reject) => {
            new user(userObj).save((err) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(userObj)
                }
            })
        })
    },

    // 新用户登录
    login: (userObj) => {
        return new Promise((resolve, reject) => {
            // 查找有没有对应用户
            user.findOne({
                name: userObj.name,
                password: userObj.password
            }, (err, res)=>{
                if (err) {
                    reject(err)
                }
                else if(res != null) {
                    resolve(res)
                }
                else {
                    resolve(null);
                }
            })
        }, (err, res)=>{
            reject(err)
        })
    }
}