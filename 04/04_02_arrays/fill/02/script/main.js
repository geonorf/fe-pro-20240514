function replaceByValForIndexRange(valArray, val, startIndex, stopIndex){
    if (stopIndex < startIndex){
        alert('Індекс останього елементу не може бути меншим за індекс початкового');
    } else if (startIndex < 0){
        alert('Початковий індекс не може бути меншим за нуль');
    } else if (stopIndex > 15){
        alert('Останій індекс не може бути білшим за 15 (15 включно)');
    } else{
        valArray.fill(val, startIndex, stopIndex);
    }
}

let someArray = [];

for (let i = 0; i < 16; i++){
    someArray[i] = Math.floor(Math.random()*50);
}

newElement = prompt('Введіть на що замінити елементи в масиві, будь ласка');
startIndex = prompt('Введіть початковий індекс (не менше 0), будь ласка');
stopIndex  = prompt('Введіть кінцевий індекс (не більше 15, 15 включно), будь ласка');

console.log(`Початковий масив: ${someArray}`);

replaceByValForIndexRange(someArray, newElement, startIndex, stopIndex);

console.log(`Оновленний масив: ${someArray}`);

