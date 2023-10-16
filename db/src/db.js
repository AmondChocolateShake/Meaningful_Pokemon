const mysql = require('mysql'); // 또는 require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});


connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL에 연결되었습니다.');

  connection.query('SELECT * FROM your_table', (err, rows) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return;
    }
    console.log('Data from MySQL:', rows);
  });

  connection.end(); // 연결 종료
});
