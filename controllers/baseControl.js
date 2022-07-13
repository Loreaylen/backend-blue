const { run } = require('../models/spreadsheet');

const hola = run().then(x => console.log(x))
console.log("the promise: ",hola)        

module.exports = hola



