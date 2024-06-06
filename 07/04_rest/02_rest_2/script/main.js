let middleVal = (...vals) => {
    let sum = vals.reduce((prevVal, currVal) => prevVal + currVal, 0);
    return sum/vals.length
}

console.log(`Середне значення чисел всіх чисел є ${middleVal(1,50,7,6,8,1,0,22,7,-1,57,111,7,3,6,1,5,100,15,101,1,5)}`);