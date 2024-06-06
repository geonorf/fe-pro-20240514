let getRandomNumber = ()      => Math.random() * 1000;
let roundNumFloor   = (value) => Math.floor(value);
let roundNumCeil    = (value) => Math.ceil(value);

let val1 = getRandomNumber();
let val2 = getRandomNumber();

console.log(`Число ${val1} після округлення вниз дорівнює: ${roundNumFloor(val1)}`);
console.log(`Число ${val2} після округлення вверх дорівнює: ${roundNumCeil(val2)}`);