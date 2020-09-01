var mongoose = require('mongoose')
const Schema = require('../../mongodb')

var tipSchema = new Schema({
    tips: {
        type: Array,
    },
});

module.exports = mongoose.model("Tip", tipSchema)