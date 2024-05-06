// Пример получения данных из google sheets
import { google } from 'googleapis'
import { auth, sheetID } from './auth.js'


const spreadsheetId = sheetID // в ф-ю sheets.spreadsheets.values.get нужно передавать именно spreadsheetId

const sheets = google.sheets({ version: 'v4', auth });

let range = "allData!A1:G741"

console.log(sheetID)

try {
    const result = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
    });
    const numRows = result.data.values ? result.data.values.length : 0;
    console.log(`${numRows} rows retrieved.`);
    console.log(result.data.values)
} catch (err) {
    // TODO (developer) - Handle exception
    throw err;
}
