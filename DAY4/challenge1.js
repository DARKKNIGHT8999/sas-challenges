function compterCaracteres(chaine){
let count=0    
let i=0
    while(chaine[i]!== undefined){
        count++
        i++;
    }
    return count;
}
let resultat=compterCaracteres("code");
console.log(resultat);