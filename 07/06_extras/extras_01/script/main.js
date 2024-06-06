function ageCalculate(birthDay){
    let bd = new Date(birthDay);
    let td = new Date();

    let bdYear  = bd.getFullYear();
    let bdMonth = bd.getMonth();
    let bdDay   = bd.getDay();

    let tdYear  = td.getFullYear();
    let tdMonth = td.getMonth();
    let tdDay   = td.getDay();

    let age = tdYear - bdYear;
    
    // А якщо дня народження ще не було? Тоді ще трохи математики ) 
    if (tdMonth < bdMonth || (tdMonth === bdMonth && tdDay < bdDay)){
        age--;
    }

    return age;
}

let userDate = prompt('Введіть дату Вашого народженя у форматі YYYY-MM-DD, будь ласка');
alert(`Ваш вік: ${ageCalculate(userDate)}`);