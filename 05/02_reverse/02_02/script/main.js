// function revArr(tempArray){
//     let reverArray = tempArray.reverse();

//     return reverArray;
// };

let revArr = (tempArray) => (tempArray.reverse())

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Початковий масив: ${someArray}`);
console.log(`Оновленнйи масив: ${revArr(someArray)}`);