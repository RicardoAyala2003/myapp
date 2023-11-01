var mongoose = require("mongoose");

var AllPizzaSchema = mongoose.Schema;

var PizzaSchema = new AllPizzaSchema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  }, 
  SKU: {
    type: String,
    required: true,
  },
  tamaño: {
    type: String,
    required: true
  },
  Ingredientes: {
    type: Array,
    required: true
  },

});

var UserModel = mongoose.model("Pizzas", PizzaSchema);

module.exports = UserModel;