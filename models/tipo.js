const { Schema, model } = require('mongoose')

const TipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre tipo requerido'],
        minlength: 1
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Tipo', TipoSchema)