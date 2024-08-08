const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'recycle_user',
    password: 'spassword',
    database: 'quick_recycle'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

module.exports = connection;
