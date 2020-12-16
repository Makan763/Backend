var professeurs = require("./../SchemaPro");

exports.GetListeP = async function professeur(){

    return new Promise((resolve,reject)=>{

        professeurs.find((err, listeP)=>{       

            resolve(listeP);
        });
    });
};

exports.Add = async(professeurDatas)=>{

    return new Promise((resolve,reject)=>{

        professeurs.create(professeurDatas);

        resolve(true);
    });
};
exports.Update = async(id, dataProfesseur)=>{
  
    return new Promise((resolve,reject)=>{

        professeurs.updateOne({_id:id}, {$set:dataProfesseur}, ()=>resolve(true));
    });

};
exports.Delete = async(id)=>{

    return new Promise((resolve,reject)=>{

        professeurs.deleteOne({_id:id}, ()=>resolve(true));
        
    });
};
