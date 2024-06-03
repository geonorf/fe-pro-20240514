// В цьому циклі використовуємо let замість var, оскільки i - це ітератор, зміна, що при кожній ітерації циклю
// змінюється, то б то не може бути константою (константа не змінюється від моменту її оголошення)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Тут виконаємо заміну var на const, оскільки по суті в залежності від області видимості message в "if" це не той самий
// message в глобальній зоні видимості. Тому тут можна оголосити зміні як const. 
// Так само це приклад можна переписати із let. Також коментар в завдані - не вірний

// const
const message = 'test'; //Значення зміної має не змінюватись протягом роботи зі зміною 
function example() {
    if (true) {
        const message = 'Hello, world!'; // Значення зміної має не змінюватись протягом роботи зі зміною у блоці if
        console.log(message); // Виведе 'Hello, world!'
    }
    console.log(message); // Виведе 'test!'
}

example();

// let (тут може змінюватись)
let message_2 = 'test';
function example2() {
    if (true) {
        let message_2 = 'Hello, world!';
        console.log(message_2); // Виведе 'Hello, world!'
    }
    console.log(message_2); // Виведе 'test!'
}

example2();