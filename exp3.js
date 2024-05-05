// Пример добовления данных в google sheet полученных из базы данных postgres
import { google } from 'googleapis'

import { auth, sheetID } from './auth.js'
import db from './db_connect.js'


const sheets = google.sheets({ version: 'v4', auth });

/**
 *           ['id',  'lang', 'vac',  'vacref', 'res', 'region', 'data']
 * @returns [{number, string, numder, string, string, string, data}] 
 */
const data_db = async () => {
    try {
        const { rows } = await db.query("select * from hh order by data limit 54", [])
        if (rows[0]) { return { rows } }
        return { msg: "not found" }
    } catch (error) {
        return { error }
    }
}

// Функция для вставки массива данных в столбец B
const insertData = async (data, range, sheetID) => {    
    await sheets.spreadsheets.values.update({
        spreadsheetId: sheetID,
        range: range,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: data.map(value => [value]),
        },
    });
};

let data = await data_db() // console.log(Object.keys(data.rows[0])) // ['id', 'lang', 'vac', 'vacref', 'res', 'region', 'data']

const range_Char = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const range_Item = ['id', 'lang', 'vac', 'vacref', 'res', 'region', 'data']


for (let i = 0; i < range_Char.length; i++) {
    try {
        const range = `Sheet2!${range_Char[i]}2:${range_Char[i]}${data.rows.length+1}`;
        console.log(range)
        insertData(data.rows.map(item => item[range_Item[i]]), range, sheetID);
    }
    catch (err) {
        console.log('Err add data to GS' + err)
    }
}


