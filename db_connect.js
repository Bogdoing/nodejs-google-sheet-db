import pg from "pg";
const { Pool } = pg;


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres', //StatsHH
  password: '1234',
  port: 5432, // или порт, указанный в вашей настройке PostgreSQL
});

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

// // Закрытие подключения
// pool.end((err) => {
//   if (err) throw err;
//   console.log("Подключение к PostgreSQL закрыто.");
// });

export default pool;