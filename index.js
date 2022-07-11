const express = require('express')
const app = express()

const endpoints = require('./routers/endpoints')

app.use('/', endpoints)

const PORT = process.env.PORT || 3001;
app.listen(PORT)
console.log(`Servidor corriendo en puerto ${PORT}`)