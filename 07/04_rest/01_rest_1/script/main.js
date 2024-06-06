let workWithRest = (someString, ...otherData) => {console.log(`Строка: ${someString}, масив: ${otherData}`);}
workWithRest('hello', 1, 'weather', 200, 'doom', 'rest', 125, 'Boo');