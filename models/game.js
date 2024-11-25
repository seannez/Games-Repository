const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gamesSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Game = mongoose.model('Game', gamesSchema)

module.exports = Game