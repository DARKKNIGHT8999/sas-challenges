function estPalindrome(chaine){
let inverse="";
let i=0;
let longueur=0;
while(chaine[longueur]!==undefined){
    longueur++;
}
i=longueur-1;
while(i>=0){
    inverse=inverse+chaine[i];
    i--;
}
if(chaine===inverse){
return true; 
}else{
return false;    
}
}

console.log(estPalindrome("kayak"));
console.log(estPalindrome("houssam"));
