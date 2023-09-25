const { request, response } = require('express')

const testing = (req = request, res = response) => {// endpoint
    const { msj, msj2 } = req.query
    return res.json({
        msj: `${msj} ${msj2}`
    })
}

module.exports = { testing }

