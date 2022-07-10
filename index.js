const express = require('express')
const app = express()

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain'})
//     response.end("Que onda perro")
// })

app.get('/', (request,response) =>{
    response.send('<h1>Que onda prro</h1>')
})

const PORT = 3001
app.listen(PORT)
console.log(`Servidor corriendo en puerto ${PORT}`)