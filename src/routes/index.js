const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.send('Hola mundo, mi primir Index en Nodejs')
})


router.get('/about',(req,res)=>{
    res.send('Esta es la pagina del about');
})

module.exports= router
