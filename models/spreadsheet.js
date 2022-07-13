const { GoogleSpreadsheet } = require('google-spreadsheet'),
      doc = new GoogleSpreadsheet("1ZAlbj1a3I4D-qePNzdbzgDSx0o4KPWs3khtJspvK6b0");

async function accesoGoogleSheet() {

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_ACCOUNT,
    private_key: process.env.PRIVATE_KEY,
  });
  await doc.loadInfo()
  const test = doc.sheetsByIndex[0]
  return test
}

async function run() {
 const x = await accesoGoogleSheet()
 console.log(x)
}


module.exports = {
  accesoGoogleSheet,
  run,
}

