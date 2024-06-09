// Elements list
const elementsArray = [
    {
        tag:  'p', 
        text: 'Елемент 1',
    },
    {
        tag: 'div',
        text: 'Елемент 2'
    },
    {
        tag: 'span',
        text: 'Елемент 3'
    }
];

// Main
window.onload = function (){
    let containerElem = document.querySelector('.container');
    for (const element of elementsArray) {
        let newElem = document.createElement(element.tag);
        newElem.innerText = element.text;
        containerElem.appendChild(newElem);
    }
}

