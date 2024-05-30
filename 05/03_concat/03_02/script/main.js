function makeOneArray(arr1, arr2){
    let resArr = [];
    resArr = resArr.concat(arr1, arr2);
    return resArr;
};

let array1 = [];
let array2 = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    array1[i] = Math.floor(Math.random()*50);
    array2[i] = Math.floor(Math.random()*50);
}

console.log(`Перший масив: ${array1}`);
console.log(`Другий масив: ${array2}`);
console.log(`Об'єднанний масив: ${makeOneArray(array1, array2)}`);

