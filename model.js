const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {type: String, required: true},
    password: { type: String, required: true}
})
mongoose.models = {}
module.exports = mongoose.model('UserModel', User)
