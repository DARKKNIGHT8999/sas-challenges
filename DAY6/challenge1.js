let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];
console.log("all the students");
for (i=0;i<students.length;i++){
    console.log(students[i]);
}
console.log("firstName");
for (i=0;i<students.length;i++){
    console.log(students[i].firstName);
}
console.log("age");
for (i=0;i<students.length;i++){
console.log(students[i].age);    
}
console.log(students[i].firstName+""+students[i].age+""); 