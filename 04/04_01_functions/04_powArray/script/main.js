// Функція, що підносить до степеню 2 кожний елемент масиву, та записує в ту саму комірку нове значення.
// Піднесення до степеню реалізовано через Math.pow - швидше і компактніше ніж робити через for 
function powArray(numbers){
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = Math.pow(numbers[i],2);
    }

    return numbers;
}

let numArray = [2, 7, 1, 0, 5, 8, 10, 100];
console.log(`Вихідний масив: ${numArray}`);
console.log(`Новий масив:    ${powArray(numArray)}`);