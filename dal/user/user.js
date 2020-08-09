var mongoose = require('mongoose')
const Schema = require('../../mongodb')

var userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    introduce: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema)