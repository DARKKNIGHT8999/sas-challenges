function repeterChaine( chaine , fois){
let resultat="";
let i=0;
while(i<fois){
    resultat=resultat+chaine;
    i++;
}
return resultat;
}
console.log(repeterChaine( "XQC" , 9 ));