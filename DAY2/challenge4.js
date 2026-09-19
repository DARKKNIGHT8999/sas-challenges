const prompt = require('prompt-sync')();
let nombre = Number(prompt("nombre de participant: "));
for (let i=1;i<=nombre;i++){
console.log("participant" + i);
}