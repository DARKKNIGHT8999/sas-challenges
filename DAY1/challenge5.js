var prompt = require('prompt-sync')();
let duree = Number(prompt("duree : "));
let categorie="";
if (duree<60){
    categorie="court metrage";
}else if (duree<=120){
    categorie="film standard";
}else{
    categorie="film long";
}
console.log("duree: " + duree + "minutes");
console.log("categorie: " + categorie);