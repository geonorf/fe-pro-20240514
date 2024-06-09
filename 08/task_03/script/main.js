const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

window.onload = function (){
    let tableBody = document.querySelector('tbody');
    for (const book of booksArray){
        let trElem = document.createElement('tr');
        tableBody.appendChild(trElem);
        for (const info in book){
            let tdElem = document.createElement('td');
            tdElem.innerText = book[info];
            trElem.appendChild(tdElem);
        }
    }

}