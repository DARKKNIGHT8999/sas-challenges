const prompt = require('prompt-sync')();
let choix=0;
while (choix!=4){
console.log("menu");
console.log("1.afficher le profil");
console.log("2.afficher les paramètres");
console.log("3.afficher les notifications");
console.log("4.se déconnecter");
 choix = Number(prompt("choix: "));
switch(choix){
case 1:
    console.log("afficher le profil");
    break;    
case 2:
    console.log("afficher les paramétres");
    break;
case 3:
    console.log("afficher les notifications");
    break;
case 4:
    console.log("se déconnecter");
    break;
default:
    console.log("choix invalide.");
    break;          
}}