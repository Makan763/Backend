var classes = require("./../SchemaClasse");

exports.GetClasse = async function classe(){

    return new Promise((resolve, reject)=>{

        classes.find((err, listeCl)=>{

            resolve(listeCl);

        });

    });
}
exports.Add = async(dataClasse)=>{

    return new Promise((resolve, reject)=>{

        classes.create(dataClasse);

            resolve(true);
       
    });
};