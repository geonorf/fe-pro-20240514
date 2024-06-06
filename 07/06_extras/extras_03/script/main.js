function someObj(objs){
    let max = {};

    objs.forEach(obj => {
        let month = new Date(obj.date).getMonth();
        if (!max[month] || obj.value > max[month].value){
            max[month] = {date: obj.date, value: obj.value};
        }
    });

    let sortObj = Object.values(max).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    return sortObj;
}

const data = [
    { date: '2024-01-15', value: 10 },
    { date: '2024-01-20', value: 20 },
    { date: '2024-02-10', value: 15 },
    { date: '2024-02-15', value: 25 },
    { date: '2024-03-01', value: 30 },
    { date: '2024-03-05', value: 10 }
];

console.log(someObj(data));