import { google } from 'googleapis'

// Аутентификация клиента
const auth = new google.auth.GoogleAuth({
    keyFile: './credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheetID = '1M4W89_5ZtAx7EgwevFt3c9RQd6-U-_yVr4B1KI47vls'

export { auth, sheetID }