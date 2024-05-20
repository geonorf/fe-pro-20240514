// Get month
let MonthNumber = Number(prompt("Enter month number, please"));

if ((MonthNumber === 12) || (MonthNumber === 1) || (MonthNumber === 2))
    console.log('The season is: Winter');
else if ((MonthNumber === 3) || (MonthNumber === 4) || (MonthNumber === 5))
    console.log('The season is: Spring');
else if ((MonthNumber === 6) || (MonthNumber === 7) || (MonthNumber === 8))
    console.log('The season is: Summer');
else if ((MonthNumber === 9) || (MonthNumber === 10) || (MonthNumber === 11))
    console.log('The season is: Autumn');
else
    console.log('The month number out of range 1 - 12');