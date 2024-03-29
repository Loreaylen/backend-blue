const { GoogleSpreadsheet } = require('google-spreadsheet'),
      doc = new GoogleSpreadsheet("1ZAlbj1a3I4D-qePNzdbzgDSx0o4KPWs3khtJspvK6b0");

module.exports = async function accesoGoogleSheet() {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_ACCOUNT,
    private_key: process.env.PRIVATE_KEY,
  });
  await doc.loadInfo()
  return doc
};
