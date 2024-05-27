let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Початковий масив: ${someArray}`);

let newElem = prompt('Введіть новий елемент масиву, будь ласка');
someArray.unshift(newElem);

console.log(`Оновленний масив: ${someArray}`);