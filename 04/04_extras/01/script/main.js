function appandArray(valArray, val){
    for(let i = 0; i < valArray.length; i++){
        if (valArray[i] === val){
                alert('Число присутне в масиві!');
                return -1;
        }
    }
    valArray.push(val);
    alert('Число додано до масиву. Новий масив виведено до консолі');
    
    return valArray;
}

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray.push(Math.floor(Math.random()*50));
}

console.log(`Масив: ${someArray}`);

let someVal = Number(prompt('Введіть, будь ласка, число'));

if (appandArray(someArray, someVal) != -1)
    console.log(`Масив: ${someArray}`);
