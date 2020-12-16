var mongoose = require("mongoose");
var classesSchema = mongoose.Schema({
    nomclasse: String  
});
module.exports = mongoose.model("classes", classesSchema);