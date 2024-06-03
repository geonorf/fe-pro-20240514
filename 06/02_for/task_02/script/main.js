const students = [
    {
        name: 'Alice',
        age: 20, 
        grade: 'A' 
    },
    { 
        name: 'Bob', 
        age: 22, 
        grade: 'B' 
    },
    { 
        name: 'Charlie',
        age: 21,
        grade: 'C'
    }
];

for (const student of students) {
    for (const prop in student) {
         console.log(`Student ${prop}: ${student[prop]}`);
    }
    console.log("-------------------------");
}