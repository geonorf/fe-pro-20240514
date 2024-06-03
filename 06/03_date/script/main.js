function bd_year(age){
    let time = new Date();
    let now_time_year = time.getFullYear(); // getYear() - deprecated
    console.log(`Current year: ${now_time_year}`);

    // some "difficult" math
    return now_time_year - age;
};

let age = Number(prompt('Введіть Ваш вік, будь ласка'));

console.log(`Your age: ${age}`);
console.log(`Year of your birthday: ${bd_year(age)}`);
