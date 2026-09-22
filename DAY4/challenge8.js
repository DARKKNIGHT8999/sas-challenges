function extraireChaine(chaine, debut, fin){
let resultat="";
let i=debut;
while(i<fin && chaine[i]!==undefined){
    resultat=resultat + chaine[i];
    i++;
}
return resultat;
}
console.log(extraireChaine("houssam",0,5));