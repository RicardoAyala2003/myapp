var mongoose = require("mongoose");

var AllMenuSchema = mongoose.Schema;

var MenuSchema = new AllMenuSchema({
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
  combo: {
    type: Array,
    required: true
  },
  
});

var UserModel = mongoose.model("Menu", MenuSchema);

module.exports = UserModel;