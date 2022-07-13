const express = require('express'),
      app = express(),
      cors = require("cors"),
      endpoints = require('./routers/endpoints'),
      PORT = process.env.PORT || 3001;

require('./models/spreadsheet')

app.use('/', endpoints)
app.use(cors({
  origin: '*'
}));

app.listen(PORT);
console.log(`Servidor corriendo en puerto ${PORT}`);