const mongoose = require('mongoose');
// const connectionString = 'mongodb+srv://pwn:1234!!!!@cluster0-8zacm.mongodb.net/test?retryWrites=true'
const connectionString = 'mongodb+srv://userTeste:4018388@cluster0-jiwbo.mongodb.net/favoritos?retryWrites=true'

const openConnection = () => mongoose.connect(connectionString)

module.exports = {
    openConnection,
}
