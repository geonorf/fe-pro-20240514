const person ={
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const prop in person) {
    console.log(`Person ${prop}: ${person[prop]}`);
}