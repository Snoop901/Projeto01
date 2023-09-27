const express = require("express");

const produtoModel = require("../model/tbl_categoria");


const router = express.Router();


//rota get
router.get("/categoria/listarCategoria", (req, res)=> {
    res.send("Categoria listada com sucesso")
});

//rota put
router.put("/categoria/alterarCategoria", (req, res)=> {
    res.send("Categoria alterada com sucesso")
});


//rota post
router.post("/categoria/cadastrarCategoria", (req, res)=> {
    res.send ("Categoria cadastrada com sucesso")
});


//rota delete
router.delete("/categoria/deletarCategoria", (req, res)=> {
    res.send("Categoria excluida com sucesso")
});


module.exports = router;