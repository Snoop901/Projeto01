//IMPORTAÇÃO DO MODULO EXPRESS
const express = require("express");

//INSTANCIA DO MODULO EXPRESS
const app = express();

//CONFIGURAÇÃO PARA O EXPRESS MANIPULAR JSON
app.use(express.json());

const categoriaController = require("./controller/CategoriaController");
app.use("/", categoriaController);

const produtoController = require("./controller/ProdutoController");
app.use("/", produtoController);    

//SERVIDOR REQUISIÇÃO/RESPOSTA
app.listen(3000, (req, res)=>{
    console.log('SERVIDOR RODANDO ')
});