//Простой пример вставки массива значений в таблицу

import { google } from 'googleapis'

// Аутентификация клиента
import { auth, sheetID } from './auth.js'

// Создание экземпляра клиента Google Sheets
const sheets = google.sheets({ version: 'v4', auth });

// Функция для вставки массива данных в столбец B
const insertData = async (data, sheetID) => {
    const range = 'Sheet1!B1:B' + data.length;
    await sheets.spreadsheets.values.update({
        spreadsheetId: sheetID,
        range: range,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: data.map(value => [value]),
        },
    });
};

// Пример использования
const dataArray = [1, 2, 3, 4];
insertData(dataArray, sheetID);
