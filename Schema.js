var mongoose = require("mongoose");
var etudiantsSchema = mongoose.Schema({
    nom:String,
    prenom:String,
    age:Number,
    email:String,
    password:String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Role"
        }
    ],
    notes:Array,
});

module.exports = mongoose.model("etudiants",etudiantsSchema);
