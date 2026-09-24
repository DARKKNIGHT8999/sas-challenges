let nombres = [4, 8, 15, 16, 23, 42];
function findnuber(Number){
for(i=0;i<nombres.length;i++){
if(nombres[i]===Number){
return true;
}   
}
return false;
}    

console.log(findnuber(42));
console.log(findnuber(4892));