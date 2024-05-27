function addElemBegin(valArray, newVal){
        valArray.unshift(newVal);
        
        return valArray; 
}

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray.push(Math.floor(Math.random()*50));
}

console.log(`Початковий масив: ${someArray}`);

let newElem = Number(prompt('Введіть число, будь ласка'));

console.log(`Оновленний масив: ${addElemBegin(someArray, newElem)}`);