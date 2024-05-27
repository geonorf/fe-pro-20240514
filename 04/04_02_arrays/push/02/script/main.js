function addValToArray(valArray, value){
    valArray.push(value);
}

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray.push(Math.floor(Math.random()*50));
}

console.log(`Початковий масив: ${someArray}`);

let val = prompt("Введіть елемент, що буде додано до масиву");

addValToArray(someArray, val);

alert(`Оновленний масив: ${someArray}`);