var mongoose = require("mongoose");

var AllStudentsSchema = mongoose.Schema;

var StudentsSchema = new AllStudentsSchema({
  name: {
    type: String,
    
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }, 
});

var UserModel = mongoose.model("MyStudents", StudentsSchema);

module.exports = UserModel;