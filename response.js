module.exports = function (data) {
    if (data) {
        return { errCode: '0', data: data }
    }
    else {
        return { errCode: '-1', data: null }
    }
}
