function randomColor(){
    const hue   = Math.floor(Math.random() * 360);
    const sat   = Math.floor(Math.random() * 100) + '%';
    const light = Math.floor(Math.random() * 100) + '%';
    const aChnl = Math.random();
    return `hsla(${hue}, ${sat}, ${light}, ${aChnl})`;
}

function createNewElem(motherElement, count) {
    for(let elem=0; elem<count; elem++){
        let newElem = document.createElement('div');
        newElem.style.width  = '50px';
        newElem.style.height = '50px';
        newElem.style.borderRadius = `${Math.floor(Math.random()*50)}px`;
        newElem.style.background = randomColor();
        motherElement.appendChild(newElem);
    }
}

window.onload = function () {
    let motherElem   = document.querySelector('.container');
    let countNewElem = Number(prompt('Введіть кількість нових елементів, будь ласка'));
    createNewElem(motherElem, countNewElem);
}