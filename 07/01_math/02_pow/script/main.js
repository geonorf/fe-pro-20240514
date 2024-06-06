let numToPow = (val, power)=>Math.pow(val, power);

let value = Number(prompt(`Введіть число, будь ласка`));
let power = Number(prompt(`Введіть ступінь до якого треба підвести число ${value}, будь ласка`));

console.log(`Число ${value} у стеніні ${power} дорівнює ${numToPow(value, power)}`);