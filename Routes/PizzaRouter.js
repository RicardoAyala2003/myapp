const express = require("express");
const router = express.Router();
const createPizza =require("../Controllers/PizzaController") ;

router.post("/create",createPizza.newPizza);

module.exports = router;