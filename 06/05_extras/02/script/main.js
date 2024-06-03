const employees = [
    { 
        name: 'John', 
        age: 28, 
        salary: 3000 
    },
    { 
        name: 'Jane', 
        age: 32, 
        salary: 4000 
    },
    { 
        name: 'Peter', 
        age: 24, 
        salary: 2500 
    },
    { 
        name: 'Mark', 
        age: 30, 
        salary: 3500 
    }
];

let newSalary    = (empl, pers) => {empl.forEach(employerSalary => employerSalary.salary = Math.round(employerSalary.salary*(1+pers/100)))}
let sortBySalary = (empl, item) => {empl.sort((a,b)=>a[item]-b[item])}

newSalary(employees, 10);
sortBySalary(employees, 'salary');
console.log(employees);