function appender(val){
    return val.toString() + "_StringIsHere\n"
}

function modefier(arr, modFunc){
    return arr.map(modFunc);
}

let someArray = [];

for (let i = 0; i < Math.floor(Math.random()*50); i++){
    someArray[i] = Math.floor(Math.random()*50);
}

let newArray = modefier(someArray, appender)

alert(`Вхідний масив:\n${someArray}\nВихідний масив:\n${newArray}`);