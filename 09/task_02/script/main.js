function createFifty(motherElem){
    for (let i=0; i<50; i++){
        let newElem = document.createElement('div');
        newElem.style.width  = '50px';
        newElem.style.height = '50px';
        newElem.style.background = 'green';
        motherElem.appendChild(newElem);
    }
}

let mElem = document.querySelector('.motherContainer');

let newContainer = document.createElement('div');
newContainer.classList.add('container');
newContainer.style.display = 'flex';
newContainer.style.gap = '10px';
newContainer.style.flexWrap = 'wrap';

createFifty(newContainer);

mElem.appendChild(newContainer);


