const express = require("express");
const router = express.Router();
const createIngrediente=require("../Controllers/IngredienteController") ;

router.post("/create",createIngrediente.newIngrediente);
router.get("/read/:SKU",createIngrediente.getIngredienteBySKU);
router.put("/update/:SKU",createIngrediente.updateIngredienteBySKU);
router.get("/delete/:SKU",createIngrediente.deleteIngrediente);

module.exports = router;