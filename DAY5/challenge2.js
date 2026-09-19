const prompt = require('prompt-sync')();
let tab = prompt("entrer les nombres: ").split(",");
let somme = 0;
for (let i=0;i<tab.length;i++){
somme=somme+Number(tab[i]);
}
console.log(somme);    
