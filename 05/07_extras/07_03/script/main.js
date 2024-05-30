function procArry(arr){
    let newArr = arr.filter((val)=>val>10);

    return newArr.splice(0,3);
};

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

console.log(`Старий масив: ${someArray}`);

console.log(`Новий масив:  ${procArry(someArray)}`);