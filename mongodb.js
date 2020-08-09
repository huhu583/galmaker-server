const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/galmakerdb')

const Schema = mongoose.Schema

module.exports = Schema