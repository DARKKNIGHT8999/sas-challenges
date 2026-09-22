function inverserChaine(chaine){
    let resultat = "";
    let i=0;
while(chaine[i]!==undefined){
    resultat= chaine[i]+resultat;
    i++;
}
return resultat;
}
console.log(inverserChaine("knight"));