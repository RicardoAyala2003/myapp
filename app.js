const express = require('express')
const app = express()
const port = 3000
const PizzaRouter = require("../myapp/Routes/PizzaRouter")
const IngredienteRouter = require("../myapp/Routes/MenuRouter")
const MenuRouter = require("../myapp/Routes/IngredienteRouter")
var mongoose = require("mongoose");
 require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_KEY, {
  useNewUrlParser: true,
});

app.use("/pizza",PizzaRouter)
app.use("/menu",MenuRouter)
app.use("/ingredientes",IngredienteRouter)
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

