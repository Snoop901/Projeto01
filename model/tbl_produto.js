//importação do sequelize
const sequelize = require("sequelize");

//conexão com o banco
const connection = require("../database/database");

//mapeamento tabela categoria
const produto = connection.define(
    'tbl_produto',
    {
        codigo_produto: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unsigned : true
        },
        codigo_categoria: {
            type: sequelize.INTEGER,
            allowNull: false,
            unsigned : true
        },
        nome_produto: {
            type: sequelize.STRING(255),
            allowNull: false
        },

        valor_produto: {
            type: sequelize.DECIMAL(10, 2),
            allowNull: false
        },

        imagem_produto: {
            type: sequelize.STRING(500),
            allowNull: false
        },


        descricao_produto: {
            type: sequelize.TEXT,
            allowNull: false
        }

    });

produto.sync({ force: false });

module.exports = produto;