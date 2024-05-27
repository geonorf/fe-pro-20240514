function sortArrayGetMax(valArray){
    let max = valArray[0];
    for(let i = 1; i < valArray.length; i++)
        {
            if (valArray[i] > max) max = valArray[i];
        }
    
        return max;
}

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray.push(Math.floor(Math.random()*50));
}

console.log(`Масив: ${someArray}`);
console.log(`Макимальне число у масиві: ${sortArrayGetMax(someArray)}`);