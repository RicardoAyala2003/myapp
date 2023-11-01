const express = require("express");
const router = express.Router();
const createMenu =require("../Controllers/MenuController") ;

router.post("/create",createMenu.newMenu);
router.get("/read/:SKU",createMenu.getMenuBySKU);
router.put("/update/:SKU",createMenu.updateMenuBySKU);
router.get("/delete/:SKU",createMenu.deleteMenu);

module.exports = router;