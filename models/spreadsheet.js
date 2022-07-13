const { GoogleSpreadsheet } = require('google-spreadsheet'),
      credenciales = require('../json/credenciales.json');

const doc = new GoogleSpreadsheet("1ZAlbj1a3I4D-qePNzdbzgDSx0o4KPWs3khtJspvK6b0");

async function accesoGoogleSheet() {

  await doc.useServiceAccountAuth(credenciales);
  await doc.loadInfo();
  
  const sheet = doc.sheetsByIndex[0];
  console.log(sheet)
  }

accesoGoogleSheet()

