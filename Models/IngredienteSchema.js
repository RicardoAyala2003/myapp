var mongoose = require("mongoose");

var AllIngredienteSchema = mongoose.Schema;

var IngredienteSchema = new AllIngredienteSchema({
  nombre: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  }, 
  SKU: {
    type: String,
    required: true,
  },
  Fecha_vencimiento: {
    type: Date,
    required: true
  },
  Fecha_compra: {
    type: Date,
    required: true
  },
  precio: {
    type: Number,
    required: true,
  }, 
  tamaño: {
    type: String,
    required: true,
  }, 

});

var UserModel = mongoose.model("Ingredientes", IngredienteSchema);

module.exports = UserModel;