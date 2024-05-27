let removeElemFromStart = (valArray)=>valArray.shift();

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray.push(Math.floor(Math.random()*50));
}

console.log(`Початковий масив: ${someArray}`);

removeElemFromStart(someArray);

console.log(`Оновленний масив: ${someArray}`);