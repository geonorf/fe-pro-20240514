class Person{
    constructor(name, age){
        this._name = name;
        this._age  = age; 
    }

    sayHello(){
        console.log(`Вітаємо тебе, ${this._name}!`);
    }
}

const somePerson = new Person('John', 30);

somePerson.sayHello();