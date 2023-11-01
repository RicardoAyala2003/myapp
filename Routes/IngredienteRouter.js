const express = require("express");
const router = express.Router();
const createIngrediente=require("../Controllers/IngredienteController") ;

router.post("/create",createIngrediente.newIngrediente);

module.exports = router;