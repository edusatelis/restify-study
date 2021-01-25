
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    nome: String,
    cpf: {type: String, required: true},
    password: String,
    email: String,
    
},{
    timestamps: true
})

const User = mongoose.model('Users', userSchema )

module.exports = User;