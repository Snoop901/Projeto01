//importação do sequelize
const sequelize = require("sequelize");

//conexão com o banco
const connection = require("../database/database");

//mapeamento tabela categoria
const categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned : true
        },
        nome_categoria: {
            type: sequelize.STRING(255),
            allowNull: false
        },
        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false
        }
    }
);

categoria.sync({ force: false });

module.exports = categoria;