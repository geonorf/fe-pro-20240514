function oddChecker(elem){
    if (elem%2!==0){
        return true;
    } else return false;
};

function useFilter(arr, procFunc){
    let newArr = arr.filter(procFunc);

    return newArr;
};

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

let resArray = useFilter(someArray, oddChecker);

console.log(`Початковий масив: ${someArray}`);
console.log(`Зміненний масив:  ${resArray}`);