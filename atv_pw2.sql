create database atv_pw2;

use atv_pw2;

#criação da tabela de produtos
create table tbl_produto (
codigo_produto Int(10) unsigned auto_increment primary key,
nome_produto Varchar(255) not null,
valor_produto Decimal (10,2) not null,
imagem_produto Varchar(500) not null,
descricao_produto text not null
);

#criação da tabela de categoria
create table tbl_categoria (
codigo_categoria int(10) unsigned auto_increment not null primary key,
nome_categoria varchar(255) not null,
observacoes_categoria text not null
); 


drop table tbl_produto;