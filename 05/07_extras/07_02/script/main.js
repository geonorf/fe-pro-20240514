function revRemElem(arr, startInd, stopInd){
    let remElems = arr.splice(startInd, stopInd);
    
    return remElems.reverse();
};

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Старий масив: ${someArray}`);

startIndex = Number(prompt(`Введіть початковий індекс: `));
stopIndex  = Number(prompt(`Введіть кінцевий індекс:`));

console.log(`Новий масив:  ${revRemElem(someArray, startIndex, stopIndex)}`);