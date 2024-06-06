function randomMinMax(min, max){
    // Перевіряємо, щоб було з чого обирати
    if (max - min < 10){
        return 0;
        }

    let randArr = [];
    for (let i=0; i<10; i++){
        while (true){
            let randVal = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!randArr.includes(randVal)){
                randArr.push(randVal);
                break;
            }
        }

    }

    return randArr;
}

let minVal = Number(prompt('Введіть мінімальне значення діапазону, будь ласка'));
let maxVal = Number(prompt('Введіть максимальне значення діапазону, будь ласка'));

alert(`Рандомний масив з 10 чисел,\nобраних довільно з з промужіку між ${minVal} та ${maxVal} є\n${randomMinMax(minVal, maxVal)}`);