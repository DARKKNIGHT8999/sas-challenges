function compterCaracteres(chaine){   
let i=0;
    while(chaine[i]){
        i++;
    }
    return i;
}
let resultat=compterCaracteres("code");
console.log(resultat);