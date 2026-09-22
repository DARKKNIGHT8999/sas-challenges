function plusgrand(chaine){
let mots=chaine.split(" ");
let plusgrand = mots[0];
let i=1;
while(i<mots.length){
    if(mots[i].length>plusgrand.length){
        plusgrand=mots[i];
    }
    i++;
}
return plusgrand;
}
console.log(plusgrand("java est un langage de programmation"));