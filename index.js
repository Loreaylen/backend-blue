const express = require('express')
const app = express()
const cors = require("cors");
const endpoints = require('./routers/endpoints')
const PORT = process.env.PORT || 3001;

app.use('/', endpoints)
app.use(cors({
  origin: '*'
}));

app.listen(PORT);
console.log(`Servidor corriendo en puerto ${PORT}`);