// Get vals
let FirstVal  = Number(prompt("Enter first value, please"));
let SecondVal = Number(prompt("Enter second value, please"));
let ThirdVal  = Number(prompt("Enter third value, please"));

let MaxVal;

// Compare
if (FirstVal > SecondVal)
    MaxVal = FirstVal;
else 
    MaxVal = SecondVal;

if (ThirdVal > MaxVal)
    MaxVal = ThirdVal;

console.log(`The max value is ${MaxVal}.`);