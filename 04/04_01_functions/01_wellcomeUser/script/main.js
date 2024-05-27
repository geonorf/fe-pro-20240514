// Print to console
function hiUser(user){
    console.log(`Вітаю, ${user}!`);
};

// "Welcome user" - loop with array proccessing
function welcomeUser(hiUserFunction, names_array){
    for(let i = 0; i < names_array.length; i++){
        hiUserFunction(names_array[i]);
    }
};

// Array of names
let names = ['Igor', 'Taras', 'Anna', 'Tony', 'Natalia', 'Alex', 
             'Іване', 'Тетяно', 'Катерино', 'Нелю', 'Юрій', 
             'Степане', 'Фіоно', 'Шрек', 'Денисе'];

// Print
welcomeUser(hiUser, names);