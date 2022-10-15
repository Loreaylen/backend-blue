const {Router} = require('express'),
      router = Router(),
      dolarScrp = require('./scraping');
      // llamadaExcel = require('../models/spreadsheet'),
      // dolarPrueba = require("../notasDePrueba.json"),

router.get('/', (request,response) => {
  response.send('<h1>Esto es localhost</h1>')
})

router.get('/api/dolar', (request, response) => {
  dolarScrp.then(values => response.json(values));
/*   llamadaExcel()
  .then(document => document.sheetsByIndex[0])
  .then(sheet => sheet.getRows())
  .then(row => {
    const rowLength = row.length,
          values = [];
    for (let i = 0; i < rowLength; i++) {
      const element = row[i];
      values.push({
        i: element.id,
        t: element.tipo,
        c: element.compra,
        v: element.venta,
        d: formatDate
      })
    };
    return response.json(values);
  })
  .catch(err => response.send(err))
 */

})

router.get('/api/dolar/:id', (request, response) => {
  const id = Number(request.params.id),
    dolar = dolarPrueba.valoresDolar.find(dolar => dolar.id === id);    
  response.json(dolar)
})

module.exports = router
