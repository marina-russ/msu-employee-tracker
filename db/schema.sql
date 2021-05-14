/* drop database is only for the purpose of this exercise */
DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) DEFAULT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) DEFAULT NULL,
  salary DECIMAL(8,2) DEFAULT NULL,
  department_id INT DEFAULT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) DEFAULT NULL,
  last_name VARCHAR(30) DEFAULT NULL,
  role_id INT DEFAULT NULL,
  manager_id INT DEFAULT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES role(id)
);

