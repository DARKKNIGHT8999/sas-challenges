function compterVoyelles(chaine){
let count=0
i=0;
while(chaine[i]!==undefined){
let c = chaine[i];
if(c==="a"|| c==="e" || c==="i" || c==="o" || c==="y" || c==="u"){
    count++;
}
i++;
}
return count;
}
console.log(compterVoyelles("houssamfassa"));