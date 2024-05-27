function sortRemoveMax(valArray){
    valArray.sort((a, b) => a - b);
    valArray.pop();

    return valArray;
}

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray.push(Math.floor(Math.random()*50));
}

console.log(`Початковий масив: ${someArray}`);
console.log(`Оновленний масив: ${sortRemoveMax(someArray)}`);