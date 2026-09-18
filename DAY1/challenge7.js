var prompt = require('prompt-sync')();
let notecc = Number(prompt("controle continu: "));
let noteprojet = Number(prompt("projet: "));
let noteexamen = Number(prompt("examen: "));
let notefinal = (notecc*2 + noteprojet*3 + noteexamen*5)/10;
console.log("notefinal: " + notefinal);