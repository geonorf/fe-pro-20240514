// Arrow hiUser function
let hiUser = (user)=>console.log(`Вітаю, ${user}!`);

// Arrow welcomeUser
let welcomeUser = (hiUserFunction, names_array) => {
    for(let i = 0; i < names_array.length; i++){
        hiUserFunction(names_array[i]);
    }
    return;
};

// Array of names
let names = ['Igor', 'Taras', 'Anna', 'Tony', 'Natalia', 'Alex', 
             'Іване', 'Тетяно', 'Катерино', 'Нелю', 'Юрій', 
             'Степане', 'Фіоно', 'Шрек', 'Денисе'];

// use welcomeUser
welcomeUser(hiUser, names);