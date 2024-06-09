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

// Creating new elemFunction
function newElemCreator(motherElem, newElem){
    let elem = document.createElement(newElem.tag);
    elem.innerText = newElem.text;
    motherElem.appendChild(elem);
};

// Main
window.onload = function(){
    let container = document.querySelector('.container');
    elementsArray.forEach((elem) => newElemCreator(container, elem));
}