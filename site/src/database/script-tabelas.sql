-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE projetoIndividual;

USE projetoIndividual;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


CREATE TABLE ranking(
idRanking int primary key auto_increment,
posicao int
);

CREATE TABLE quiz(
idQuiz int primary key AUTO_INCREMENT,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkRanking int,
foreign key (fkRanking) references ranking(idRanking),
pontos int 
);

select *from usuario;
select*from quiz;

 SELECT quiz.idQuiz,usuario.nome,quiz.pontos
        FROM quiz 
		INNER JOIN usuario 
		ON idQUiz = idUsuario order by pontos desc;
        
        truncate table usuario;
        truncate table quiz;

drop database projetoIndividual;



/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);





/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
