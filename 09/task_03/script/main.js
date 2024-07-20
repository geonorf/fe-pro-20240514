function createFifty(motherElem){
    for (let i=0; i<50; i++){
        let newElem = document.createElement('div');
        newElem.style.width  = '50px';
        newElem.style.height = '50px';
        newElem.style.backgroundColor = 'green';
        motherElem.appendChild(newElem);
    }
}

window.onload = function(){
    let mElem = document.querySelector('.task_block');

    let newContainer = document.createElement('div');
    newContainer.classList.add('cContainer');
    newContainer.style.display = 'flex';
    newContainer.style.gap = '10px';
    newContainer.style.flexWrap = 'wrap';

    createFifty(newContainer);

    mElem.appendChild(newContainer);

    // console.log(mElem);

    let [...mElemArr] = document.querySelectorAll('.cContainer > div');

    console.log(mElemArr);

    mElemArr.forEach((divElem, index) => {
        divElem.classList.add('circle-elemt');
        if (index%2 === 0){
            divElem.classList.add('test');
        }
    });
}