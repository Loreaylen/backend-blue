const {Router} = require('express');
const router = Router();

const dolarPrueba = require("../notasDePrueba.json")

router.get('/', (request,response) =>{
    response.send('<h1>Esto es localhost</h1>')
})

router.get('/api/dolar', (request, response) => {
    response.json(dolarPrueba.valoresDolar)
})

router.get('/api/dolar/:id', (request, response) => {
    const id = Number(request.params.id)
    const dolar = dolarPrueba.valoresDolar.find(dolar => dolar.id === id)
    
    response.json(dolar)
})



module.exports = router