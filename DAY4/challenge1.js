function compterCaracteres(chaine){
let count=0
    for(let c of chaine){
        count++;
    }
    return count;
}
let resultat=compterCaracteres("code");
console.log(resultat);