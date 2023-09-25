const { Router } = require('express')
const { createGenero } = require('../controllers/genero')

const router = Router()

/**
 * Crear una genero
 */
router.post('/', createGenero)


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

module.exports = router
