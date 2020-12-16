var etudiants = require("./../Schema");

exports.GetListe = async function etudiant(){

    return new Promise((resolve,reject)=>{

        etudiants.find((err, liste)=>{
           
            resolve(liste);
        });
    });
};

exports.Add = async(etudiantDatas)=>{

    return new Promise((resolve,reject)=>{

        etudiants.create(etudiantDatas);

        resolve(true);
    });
};
exports.Update = async(id, dataEtudiant)=>{
  
    return new Promise((resolve,reject)=>{

        etudiants.updateOne({_id:id}, {$set:dataEtudiant}, ()=>resolve(true));
    });

};
exports.Delete = async(id)=>{    

    return new Promise((resolve, reject) => {

        etudiants.deleteOne({_id:id}, ()=>resolve(true));
    });
};
