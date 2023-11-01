const express = require("express");
const router = express.Router();
const createPizza =require("../Controllers/PizzaController") ;

router.post("/create",createPizza.newPizza);
router.get("/read/:SKU",createPizza.getPizzaBySKU);
router.put("/update/:SKU",createPizza.updatePizzaBySKU);
router.get("/delete/:SKU",createPizza.deletePizza);

module.exports = router;