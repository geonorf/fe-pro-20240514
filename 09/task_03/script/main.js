function createFifty(motherElem){
    for (let i=0; i<50; i++){
        let newElem = document.createElement('div');
        newElem.style.width  = '50px';
        newElem.style.height = '50px';
        newElem.style.background = 'green';
        motherElem.appendChild(newElem);
    }
}

window.onload = function(){
    let mElem = document.querySelector('.mContainer');

    let newContainer = document.createElement('div');
    newContainer.classList.add('cContainer');
    newContainer.style.display = 'flex';
    newContainer.style.gap = '10px';
    newContainer.style.flexWrap = 'wrap';

    createFifty(newContainer);

    mElem.appendChild(newContainer);

    console.log(mElem);

    [...mElem.childNodes][1].forEach((divElem, index) => {
        divElem.classList.add('circle-elemt');
        if (!(index%2 === 0)){
            divElem.classList.add('test');
        }
    });
}