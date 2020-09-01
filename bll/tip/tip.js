var tip = require('../../dal/tip/tip')

module.exports = {
    // 注册新用户
    getAllTips: () => {
        // 这里首先要判断当前用户名是否已经存在（不允许出现相同的用户名）
        return new Promise((resolve, reject) => {
            tip.find((err, res) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(res)
                }
            })
        })
    },
}