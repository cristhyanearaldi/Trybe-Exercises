const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'cris',
  password: '',
  database: 'model_example'});

module.exports = connection;