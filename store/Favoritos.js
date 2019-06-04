const mongoose = require('mongoose')

const FavoritosSchema = new mongoose.Schema({
    idUsuario: {
        type: String
    },
    personagem: {
        type: String
    },
})

const Favoritos = mongoose.model('Favoritos', FavoritosSchema)
module.exports = Favoritos
