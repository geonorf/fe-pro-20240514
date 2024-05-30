let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Масив: ${someArray}`);

let resArray = someArray.filter((elem)=>elem%2!==0);

alert(`Новий масив із парними числами: ${resArray}`);