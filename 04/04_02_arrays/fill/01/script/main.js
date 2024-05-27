let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Початковий масив: ${someArray}`);

someArray.fill(0);

console.log(`Оновленний масив: ${someArray}`);