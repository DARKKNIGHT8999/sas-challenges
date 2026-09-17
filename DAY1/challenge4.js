var prompt = require('prompt-sync')();
let distence=prompt("entrer la distence: ");
let carburant=35;
let consommation=(carburant/distence)*100;
console.log("distence: " + distence + "KM");
console.log("carburant: " + carburant + "litres");
console.log("consommation: " + consommation + "L/100KM");