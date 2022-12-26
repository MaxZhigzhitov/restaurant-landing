// dish quantity controls
/*----------------------------------*/

const remBtn = document.querySelector('.add-input__btn.rem');
const addBtn = document.querySelector('.add-input__btn.add');
const dishNumber = document.querySelector('.add-control');

addBtn.addEventListener("click", function(){
    let dishNumberStored = dishNumber.getAttribute("value");

    console.log(dishNumberStored)
    dishNumberStored++;
    dishNumber.setAttribute("value", dishNumberStored);
})

remBtn.addEventListener("click", function(){
    let dishNumberStored = dishNumber.getAttribute("value");

    console.log(dishNumberStored)
    dishNumberStored--;
    dishNumber.setAttribute("value", dishNumberStored);
})


// hide header when user scrolls down
// and show when scroll up
/*---------------------------------*/

const header = document.querySelector(".header");

let prevScrollPos = 0
let accumulate = 0;

const isScrollingDown = () => {
    let goingDown = false;


    let scrollPos = window.pageYOffset;

    if(scrollPos > prevScrollPos){
        accumulate = 0;
        goingDown = true;
        header.classList.add('hidden');
    }

    scrollUpAccumulate(scrollPos);
    prevScrollPos = scrollPos;
    
    if(accumulate > 150 || scrollPos < 500){
        header.classList.remove('hidden');
    }

    return goingDown;
}

function scrollUpAccumulate(scrollPos){
    if(window.pageYOffset <= prevScrollPos){
        accumulate += prevScrollPos - scrollPos;
    }
}

window.addEventListener('scroll', isScrollingDown);