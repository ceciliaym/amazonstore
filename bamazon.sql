DROP DATABASE IF EXISTS bamazontwoDB;

CREATE DATABASE bamazontwoDB;

USE bamazontwoDB;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
productName VARCHAR(100) NOT NULL,
departmentName VARCHAR(100) NOT NULL,
price INTEGER(10) NOT NULL,
stockQuanity INTEGER(10) NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO products (productName,departmentName,price,stockQuanity)
VALUES ('couch cover', 'furniture', 35, 3);

INSERT INTO products (productName,departmentName,price,stockQuanity)
VALUES ('pink skirt', 'female clothing', 10, 9);

INSERT INTO products(productName,departmentName,price,stockQuanity)
VALUES ('black pants','male clothing', 15, 20);

INSERT INTO products (productName,departmentName,price,stockQuanity)
VALUES ('flower pot', 'furniture', 30, 7);

INSERT INTO products (productName,departmentName,price,stockQuanity)
VALUES ('cat food','animal supplies', 5, 6);