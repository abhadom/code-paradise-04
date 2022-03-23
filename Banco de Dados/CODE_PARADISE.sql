use code_paradise;

CREATE TABLE CLIENTE 
( 
 nome VARCHAR(20) NOT NULL,  
 email VARCHAR(60) NOT NULL,  
 CPF INT PRIMARY KEY,  
 senha INT NOT NULL,  
 telefone INT 
 ); 
 
 ALTER TABLE CLIENTE
CHANGE email email VARCHAR(50);
ALTER TABLE CLIENTE
CHANGE CPF CPF INT (11) NOT NULL; 

CREATE TABLE PACOTE 
( 
 id_pacote INT PRIMARY KEY,  
 CPF INT NOT NULL,  
 cod_cidade INT NOT NULL,  
 cod_hotel INT NOT NULL,
 dia_ida DATE NOT NULL,  
 dia_volta DATE INT NOT NULL,  
 id_ue INT,  
 id_uee INT,  
 id_mundo INT  
); 

ALTER TABLE PACOTE
CHANGE dia_volta dia_volta DATE NOT NULL;

CREATE TABLE HOTEL 
( 
 cod_hotel INT PRIMARY KEY,  
 nome VARCHAR(30) NOT NULL,  
 cod_cidade INT NOT NULL  
); 

CREATE TABLE CIDADE 
( 
 cod_cidade INT PRIMARY KEY,  
 nome VARCHAR(20) NOT NULL  
); 
 
 CREATE TABLE ITINERARIO 
( 
 id_pacote INT,  
 cod_cidade INT,  
 cod_hotel INT   
); 

ALTER TABLE ITINERARIO
CHANGE id_pacote id_pacote INT;
ALTER TABLE ITINERARIO
CHANGE cod_cidade cod_cidade INT;
ALTER TABLE ITINERARIO
CHANGE cod_hotel cod_hotel INT;

CREATE TABLE EUROPA_1 
( 
 id_ue INT PRIMARY KEY,  
 cidade_1 VARCHAR(15) DEFAULT 'Londres',  
 cidade_2 VARCHAR(15) DEFAULT 'Amsterdam',  
 cidade_3 VARCHAR(15) DEFAULT 'Roma'  
); 

CREATE TABLE EUROPA_2 
( 
 id_uee INT PRIMARY KEY,  
 cidade_1 VARCHAR(15) DEFAULT 'Paris',  
 cidade_2 VARCHAR(15) DEFAULT 'Barcelona',  
 cidade_3 VARCHAR(15) DEFAULT 'Roma'  
); 

CREATE TABLE VOLTA_MUNDO 
( 
 id_mundo INT PRIMARY KEY,  
 cidade_1 VARCHAR(15) DEFAULT 'Honolulu',  
 cidade_2 VARCHAR(15) DEFAULT 'Nova York',  
 cidade_3 VARCHAR(15) DEFAULT 'Tokyo',  
 cidade_4 VARCHAR(15) DEFAULT 'Sidney'  
); 

ALTER TABLE PACOTE ADD FOREIGN KEY(CPF) REFERENCES CLIENTE (CPF);

ALTER TABLE PACOTE ADD FOREIGN KEY(cod_cidade) REFERENCES CIDADE (cod_cidade);

ALTER TABLE PACOTE ADD FOREIGN KEY(id_ue) REFERENCES EUROPA_1 (id_ue);

ALTER TABLE PACOTE ADD FOREIGN KEY(id_uee) REFERENCES EUROPA_2 (id_uee);

ALTER TABLE PACOTE ADD FOREIGN KEY(id_mundo) REFERENCES VOLTA_MUNDO (id_mundo);

ALTER TABLE HOTEL ADD FOREIGN KEY(cod_cidade) REFERENCES CIDADE (cod_cidade);

ALTER TABLE ITINERARIO ADD FOREIGN KEY(id_pacote) REFERENCES PACOTE (id_pacote);

ALTER TABLE ITINERARIO ADD FOREIGN KEY(cod_cidade) REFERENCES CIDADE (cod_cidade);

ALTER TABLE ITINERARIO ADD FOREIGN KEY(cod_hotel) REFERENCES HOTEL (cod_hotel);

ALTER DATABASE code_paradise CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO CIDADE
VALUES ('01', 'Londres'),
('02', 'Amsterdam'),
('03', 'Roma'),
('04', 'Paris'),
('05', 'Barcelona'),
('06', 'Nova York'),
('07', 'Honolulu'),
('08', 'Tokyo'),
('09', 'Sidney');

SELECT * FROM CIDADE;

INSERT INTO HOTEL
VALUES ('01', 'Hotel A', '01'),
('02', 'Hotel B', '02'),
('03', 'Hotel C', '03'),
('04', 'Hotel D', '04'),
('05', 'Hotel E', '05'),
('06', 'Hotel F', '06'),
('07', 'Hotel G', '07'),
('08', 'Hotel H', '08'),
('09', 'Hotel I', '09');

SELECT * FROM HOTEL;
SELECT * FROM CLIENTE;

INSERT INTO CLIENTE
VALUES ('Mary Doe', 'mary@email.com', 12345, '12345678', '912345678'),
('Kate Doe', 'kate@email.com', 98765, '98765432', '912345678'),
('Bruce Doe', 'bruce@email.com', 65432, '32187459', '912345678');

INSERT INTO PACOTE
VALUES (44, 12345, 06, 06, '2022-03-26', '2022-04-25', 11, 22, 33),
(55, 98765, 02, 02, '2022-05-04', '2022-05-26', 11, 22, 33),
(66, 65432, 05, 05, '2022-06-10', '2022-07-23', 11, 22, 33);

SELECT * FROM PACOTE;
SELECT * FROM ITINERARIO;

INSERT INTO ITINERARIO
VALUES (44, '06', '06'),
(55, '02', '02'),
(66, '05', '05');

SELECT * FROM EUROPA_1;
SELECT * FROM EUROPA_2;
SELECT * FROM VOLTA_MUNDO;

INSERT INTO EUROPA_1
VALUES (11, 'Londres', 'Amsterdam', 'Roma');

INSERT INTO EUROPA_2
VALUES (22, 'Paris', 'Barcelona', 'Roma');

INSERT INTO VOLTA_MUNDO
VALUES (33, 'Honolulu', 'Nova York', 'Tokyo', 'Sidney');



