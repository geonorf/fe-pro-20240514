let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

let powArray = someArray.map((elem)=>Math.pow(elem,2));

alert(`Вхідний масив:\n${someArray}\nВихідний масив:\n${powArray}`);