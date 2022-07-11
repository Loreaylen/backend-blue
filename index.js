const dolarPrueba = require("./notasDePrueba.json")

console.log(dolarPrueba.valoresDolar.find(dolar => dolar.id === 0))

const express = require('express')
const app = express()


app.get('/', (request,response) =>{
    response.send('<h1>Esto es localhost</h1>')
})

app.get('/api/dolar', (request, response) => {
    response.json(dolarPrueba.valoresDolar)
})

app.get('/api/dolar/:id', (request, response) => {
    const id = Number(request.params.id)
    const dolar = dolarPrueba.valoresDolar.find(dolar => dolar.id === id)
    
    response.json(dolar)
})

const PORT = 3001
app.listen(PORT)
console.log(`Servidor corriendo en puerto ${PORT}`)