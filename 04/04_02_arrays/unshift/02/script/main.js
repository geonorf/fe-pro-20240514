let addElemToStart = (valArray, newVal)=>valArray.unshift(newVal);

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray.push(Math.floor(Math.random()*50));
}

console.log(`Початковий масив: ${someArray}`);

let newElem = prompt('Введіть новий елемент масиву, будь ласка');
addElemToStart(someArray, newElem);

console.log(`Оновленний масив: ${someArray}`);