let retMax = (val1, val2)=>Math.max(val1, val2);
let retMin = (val1, val2)=>Math.min(val1, val2);

let number1 = Number(prompt('Введіть перше число, будь ласка'));
let number2 = Number(prompt('Введіть друге число, будь ласка'));

alert(`З двох ${number1} та ${number2}\nБільше: ${retMax(number1, number2)}\nМеньше:${retMin(number1, number2)}`);