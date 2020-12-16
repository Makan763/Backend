require("dotenv").config({path:"./config.env"});
var dbname = process.env.DBNAME;
var cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var db = mongoose.connect("mongodb+srv://assan:assan@test-cluster1.tzzv2.mongodb.net/"+dbname+"?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connexion reussie à MongoDB");
    }).catch(err => {
        console.log("Erreur de se connecter à MongoDB", err);
        process.exit();
    });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var etudiants = require("./Schema");
var professeurs = require("./SchemaPro");
//var classes = require("./SchemaClasse");
var etudiantsProviders = require("./provider/etudiantsProviders");
var professeursProviders = require("./provider/professeursProviders");
app.get("/etudiants/", async function etudiant(req, res){

    var liste = await etudiantsProviders.GetListe();
    
    res.json(liste);

});
app.get("/professeurs/", async function professeur(req, res){

    var listeP =  await professeursProviders.GetListeP();
    
    res.json(listeP);

});

app.delete("/etudiants/:id", async(req, res)=>{  
    var id = req.params.id;
    await etudiantsProviders.Delete(id);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
});
app.delete("/professeurs/:id", async(req, res)=>{
    var id = req.params.id;
    await professeursProviders.Delete(id);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
});

app.post("/etudiants/add/", async(req, res)=>{
    await etudiantsProviders.Add(req.body);
   
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
});
app.post("/professeurs/add/", async(req, res)=>{
    await professeursProviders.Add(req.body);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
});
app.put("/etudiants/:id", async(req, res)=>{     
    await etudiantsProviders.Update(req.body.id, req.body.dataEtudiant);
    res.writeHead(200, { "Content-Type":"text/html"});
    res.end();

});
app.put("/professeurs/:id", async(req, res)=>{  
    await professeursProviders.Update(req.body.id, req.body.dataProfesseur);
    res.writeHead(200, { "Content-Type":"text/html"});
    res.end();

});
app.listen(3000, ()=>{
    console.log("Le server est lancé");
});