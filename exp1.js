//Простой пример вставки одного значения в таблицу

import { google } from 'googleapis'

// Аутентификация клиента
import { auth, sheetID } from './auth.js'
// Создание экземпляра клиента Google Sheets
const sheets = google.sheets({ version: 'v4', auth });

const data = 'Hello, World! 3'
const range = 'Sheet1!A1'

// Обновление ячейки
const updateCell = async (cell, value, sheetID) => {
    await sheets.spreadsheets.values.update({
        spreadsheetId: sheetID,
        range: cell,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [[value]],
        },
    });
};

// Пример использования
updateCell(range, data, sheetID);