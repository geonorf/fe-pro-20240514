class Person{
    constructor(name, age){
        this._name = name;
        this._age  = age; 
    }

    sayHello(){
        console.log(`Вітаємо тебе, ${this._name}!`);
    }
}

class Student extends Person{
    constructor(name, age, studentID, subject){
        super(name, age);
        this._studentID = studentID;
        this._subject   = subject
    }

    study(){
        console.log(`Студен ${this._name} з ID ${this._studentID} вивчає ${this._subject}`);
    }
}

let someStudent = new Student("Ignatus", 24, 9001, "Math");

someStudent.sayHello();
someStudent.study();
