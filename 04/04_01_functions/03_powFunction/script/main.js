// Піднесення до степеню реалізовано через Math.pow - швидше і компактніше ніж робити через for
function powFunction(base, power){
    return Math.pow(base, power)
};

let userBase  = Number(prompt("Введіть основу, будь ласка"));
let userPower = Number(prompt("Введіть степінь, будь ласка"));

alert(`Результать піднесення ${userBase} до степіні ${userPower} дорівнює ${powFunction(userBase, userPower)}`);