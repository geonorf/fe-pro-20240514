window.onload = function(){
    // Subtask #1
    let getUl = document.querySelector('ul');
 
    let selectFirst = getUl.firstElementChild;  // First element
    let selectLast  = getUl.lastElementChild;   // Last element
    let thirdLiElem = getUl.children[2];        // Third elemnt
    // let secondElem  = getUl.children[1];        // Sencond elemnt

    console.log(selectFirst);
    console.log(selectLast);
    console.log(thirdLiElem);

    // Subtask #02
    let allLi    = document.querySelectorAll('li');
    let allLiArr = [...allLi];
    
    console.log(allLi);
    console.log(allLiArr);
}