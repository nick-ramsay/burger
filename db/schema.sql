DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN NOT NULL default 0, -- 0 indicates rows will be set to false as default value for this column
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY(id)
);