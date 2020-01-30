'use strict'; // torna a escrita de javascript mais segura

// Assumindo a configuração do .ENV
require('dotenv').config()

// Assumindo a configuração do Database
const mongoose = require('../config/database')

// Aqui estou montando  a estrutura da collection do meu banco
const UserSchema = new mongoose.Schema(
    {

        name: {
            type : String,
            required : true
        },
        email :{
            type : String,
            required: true
        },
        password :{
            type : String,
            required: true
        },        
        createdAt: {
            type : Date,
            default : Date.now,
        }
        

});


let User = mongoose.model('User', UserSchema)
module.exports  = User;