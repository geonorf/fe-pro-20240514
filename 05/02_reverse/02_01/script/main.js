let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Початковий масив: ${someArray}`);

let revArray = someArray.reverse();

console.log(`Оновленнйи масив: ${revArray}`);