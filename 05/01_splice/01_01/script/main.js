let tempArray = [4, 5, 7, 8, 9, 1, 4, 2656, 4, 51, 1, 46465, 1, 546654, 4651, 1, 5];

let startIndex = Number(prompt(`Введіть початковий індекс (може бути -1)`));
let elemNumber = Number(prompt(`Введіть кількість елементів`))

console.log(`Початковий масив:  ${tempArray}`);

let deletedElems = tempArray.splice(startIndex, elemNumber);

console.log(`Видалені елементи: ${deletedElems}`);
console.log(`Оновленний масив:  ${tempArray}`);