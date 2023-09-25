const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial : {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo : {
        type: String,
        required: [true, 'Titulo requerido'],
    },
    url: {
        type: String
    },
    imagen : {
        type: String
    },
    // TODO: COLOCAR EL RESTO DE ATRIBUTOS
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    }
})

module.exports = model('Tipo', TipoSchema)