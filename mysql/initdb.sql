CREATE DATABASE nodedb3;

use nodedb3;

CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id));

INSERT INTO people(name) values ('Pedro');
