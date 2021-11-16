const express = require('express')
const router = express.Router()


router.get('/users/signin',(req, res) => {
    res.send('ingresando a la aplicación')
})

router.get('/users/signup',(req, res) => {
    res.send('Usuario de atenticación')
})



module.exports= router
