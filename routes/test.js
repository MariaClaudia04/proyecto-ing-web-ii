const { Router } = require('express')
const { testing } = require('../controllers/test')

const router = Router()

router.get('/test', testing)

module.exports = router
