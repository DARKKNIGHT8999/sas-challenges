var prompt = require('prompt-sync')();
let age = Number(prompt("age: "));
if (age>=18){
console.log("acces autorise");    
}else{
console.log("acces refuse");    
}