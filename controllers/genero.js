const Genero = require('../models/genero')
const { request, response } = require('express')

/**
 * Crear un género
 */
const createGenero = async (req = request, res = response) => {
    console.log(req.body)

    const { nombre, descripcion } = req.body
    try{
        const generoDB = await Genero.findOne({ nombre })
        if(generoDB) {
            return res.status(400).json({ msj: 'Ya existe nombre'})
        }// select * from generos WHERE nombre = ?
        
        const datos = {
            nombre,
            descripcion
        }

        const genero = new Genero(datos)

        await genero.save()

        return res.status(201).json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

}

/**
 * Consultar todos los géneros
 */

/**
 * Consultar un género por su ID
 */

/**
 * Actualizar un género
 */

/**
 * Borra un genero por su ID
 */


module.exports = {
    createGenero
}