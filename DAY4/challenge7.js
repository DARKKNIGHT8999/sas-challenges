function remplacerCaractere(chaine, ancien, nouveau){
let i=0;
let resultat="";
while(chaine[i]!==undefined){
if(chaine[i]===ancien){
resultat=resultat+nouveau;
}else{
    resultat = resultat+chaine[i];
}
i++;
}
return resultat;
}
console.log(remplacerCaractere("banana", "a", "o"));