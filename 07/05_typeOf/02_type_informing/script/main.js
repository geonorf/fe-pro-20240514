function varType(variable){
    switch (typeof variable) {
        case "string":
            console.log(`Зміна ${variable} має тип "string".`);
            break;

        case "number":
            console.log(`Зміна ${variable} має тип "number".`);
            break;

        case "bigint":
            console.log(`Зміна ${variable} має тип "bigint".`);
            break;

        case "boolean":
            console.log(`Зміна ${variable} має тип "boolean".`);
            break;

        case "symbol":
            console.log(`Зміна має тип "symbol".`);
            break;

        case "undefined":
            console.log(`Зміна ${variable} має тип "undefined".`);
            break;

        case "object":
            if (variable === null) {
                console.log(`Зміна ${variable} має тип "object", а саме: null"`);
            } else if (Array.isArray(variable)) {
                console.log(`Зміна ${variable} має тип "object", а саме: масив`);
            } else {
                console.log(`Зміна ${variable} має тип "object"`);
            }
            break;

        case "function":
            console.log(`Зміна ${variable} має тип "function".`);
            break;

        default:
            console.log(`Зміна ${variable} має невідомий тип.`);
            break;
    }
}

let someFunc = ()=>console.log('Hello');

varType(someFunc);
varType([1,2,3]);
varType({a: 2, b: 0, c: 3});
varType(25);
varType('string as string');
varType(true);
varType(10n)
varType(Symbol());
varType(null);
varType(undefined);

