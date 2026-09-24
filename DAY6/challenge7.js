let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
let admis=0;
let nonadmis=0;
for (let i=0;i<students.length;i++){
console.log(students[i].name);
console.log(students[i].note);    

if(students[i].note>=10){
console.log("admis");  
admis++;  
}else{
console.log("nonadmis") 
nonadmis++;   
}
}
console.log("admis");
console.log("nonadmis");