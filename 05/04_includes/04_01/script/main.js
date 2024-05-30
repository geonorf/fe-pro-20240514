let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Масив: ${someArray}`);

let someNumber = Number(prompt(`Введіть будь-яке число, будь ласка`));

if (someArray.includes(someNumber)){
    alert(`Число ${someNumber} присутнє в масиві ${someArray}`);
} else {
    alert(`Число ${someNumber} відсутне в масиві ${someArray}`);
}

