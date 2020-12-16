var mongoose = require("mongoose");
var professeursSchema = mongoose.Schema({
    nom:String,
    prenom:String,
  
    
});

module.exports = mongoose.model("professeurs",professeursSchema);
