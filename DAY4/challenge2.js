function compterlettre(chaine, lettre){
    let count=0;
    let i=0;
    while(chaine[i]!==undefined){
        if(chaine[i]===lettre){
            count++;
        }
        i++;
    }
    return count;
}
let resultat=compterlettre("javascript", "a");
console.log(resultat);
