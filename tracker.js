const mysql = require('mysql');
const inquirer = require('inquirer');
require('console.table');

// ** ========================================= ** //
// ** ===============CONNECTION================ ** //
// ** ========================================= ** //

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'dolphin',
  database: 'employeeTracker_db',
  /* NOTE: password is a throw-away password, normally this would be hidden inside a dotenv file for security */
});

connection.connect((err) => {
  if (err) throw (err);
  console.log('connected to database!');
  init();
});

// run inquirer once connection is established
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // switch statement
      switch (answers.action) {


        // TODO: write switch statements


        default:
          exit();
      }
    });
}

// close connection when user is finished
function exit() {
  connection.end();
}

// ** ========================================= ** //
// ** ===============APPLICATION=============== ** //
// ** ========================================= ** //

function addEmployee() { }
function addRole() { }
function addDepartment() { }

function getEmployee() { }
function getRole() { }
function getDepartment() { }

function updateEmployee() { }
function updateRole() { }

// ** ========================================= ** //
// ** ===============   BONUS   =============== ** //
// ** ========================================= ** //

function updateEmployeeManager() { }
function viewEmployeesByManager() { }
function viewTotalDepartmentBudget() { } //combined salaries of all employees within the department

function deleteEmployee() { }
function deleteRole() { }
function deleteDepartment() { }