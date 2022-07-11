const express = require('express')
const app = express()

const endpoints = require('./routers/enpoints')

app.use('/', endpoints)



const PORT = 3001
app.listen(PORT)
console.log(`Servidor corriendo en puerto ${PORT}`)