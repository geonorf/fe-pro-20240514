let array1 = [];
let array2 = [];
let resArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    array1[i] = Math.floor(Math.random()*50);
    array2[i] = Math.floor(Math.random()*50);
}

console.log(`Перший масив: ${array1}`);
console.log(`Другий масив: ${array2}`);
console.log(`Об'єднанний масив: ${resArray.concat(array1, array2)}`);

