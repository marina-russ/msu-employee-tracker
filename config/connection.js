const mysql = require('mysql');
const inquirer = require('requirer');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'employeeTracker_db'
});

module.exports = connection;