var prompt = require('prompt-sync')();
let nombre = Number(prompt("nombre: "));
if (nombre>0){
    console.log("le nombre est positif");
}else if (nombre<0){
    console.log("le nombre est négatif");
}else{
    console.log("le nombre est égal à zéro");
}