
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    nome: String,
    password: String,
    email: String,
    
})

const User = mongoose.model('Users', userSchema )

module.exports = User;