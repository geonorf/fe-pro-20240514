function procArry(arr){
    let tempArr = arr.filter((val)=>val%2===0);
    let modArr  = tempArr.map((val)=>val*2);

    return modArr;
};

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

let mArray = procArry(someArray);

alert(`Вхідний масив: ${someArray}\nВихідний масив: ${mArray}`);
