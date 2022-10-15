const util = require('util'),
      exec = util.promisify(require('child_process').exec),
      fecha = new Date(),
      minutes = fecha.getMinutes(),
      formatDate = fecha.getDate() + '/' + (fecha.getMonth() + 1) + ' ' + fecha.getHours() + ':' + (minutes < 10 ? `0${minutes}` : minutes),
      values = [{
        i: 1,
        t: 'Dolar blue',
        v:'',
        c:'',
        d: formatDate
      },
      {
        i: 2,
        t: 'Dolar oficial',
        v:'',
        c:'',
        d: formatDate
      },
      {
        i: 3,
        t: 'Dolar MEP',
        v:'',
        c:'',
        d: formatDate
      },
      {
        i: 4,
        t: 'Dolar CCL',
        v:'',
        c:'',
        d: formatDate
      },
      {
        i: 5,
        t: 'Dolar cripto',
        v:'',
        c:'',
        d: formatDate
      },
      {
        i: 6,
        t: 'Dolar solidario',
        v:'',
        c:'',
        d: formatDate
      }
      ];
require('dotenv').config();

const convertToArray = (str, searchWord) => {
  return str.slice(str.indexOf(searchWord)).replace(/[$="<>/]|Compra|Venta/gi, '').replace(/is-childa|ues|di/g,'').trim().split('  ');
}

module.exports = (async () => {
  try {
    const { stdout, stderr } = await exec(process.env.COMMAND_CRL),
          arrFromStr = stdout.slice(stdout.indexOf('tile dolar'),stdout.indexOf('Solidario') + 160)
    .replace(/div|class|tile|dolar|label|cotizacion|val|venta|a>|is-childa|title|compra/g,'')
    .split('href="').slice(2),
          arrFromStrLength = arrFromStr.length;
      for (let i = 0; i < arrFromStrLength; i++) {
      const item = arrFromStr[i],
            [fValue,sValue] = convertToArray(item, item.indexOf('Compra') > -1 ? 'Compra' : 'Venta');
        if (sValue) {
          values[i].c = fValue;
          values[i].v = sValue;
        } else {
          // Caso especial de Dolar Solidario
          values[i].v = fValue;
        }
    }
    return values;
  } catch(err) {
    return err;
  }
})();
