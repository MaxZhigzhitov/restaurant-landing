// dish quantity controls
/*----------------------------------*/

const menuForms = [];
const dishCounters = [];
let dishNumberStored = 0;


//получаем все формы меню

for(i = 0; i < document.forms.length; i++){
    if(document.forms[i].classList.contains('dishday-form') || document.forms[i].classList.contains('popular-dish-form')){
        menuForms.push(document.forms[i])
    }
}
console.log(menuForms);

//получаем все счетчики количества блюд

for(i = 0; i < menuForms.length; i++){
    for(j = 0; j < menuForms[i].elements.length; j++){
        if(menuForms[i].elements[j].getAttribute("name") === "dish-count"){
            dishCounters.push(menuForms[i].elements[j]);
        }else{
            console.log('skip');
        }
        
    }
}
console.log(dishCounters);


const remButtons = [];
const addButtons = [];

//получаем кнопки меньше/больше для каждой формы

for(i = 0; i < menuForms.length; i++){
    remButtons.push(document.forms[i].remInputBtn);
    
    addButtons.push(document.forms[i].addInputBtn);
}

remButtons.forEach((item,index) => {
    item.addEventListener('click', function(){
        if(dishCounters[index].getAttribute('value') > 1){
            console.log(this.form);

            dishNumberStored = dishCounters[index].getAttribute('value');
            console.log(dishNumberStored);
            dishNumberStored--;

            dishCounters[index].setAttribute('value', dishNumberStored);  
        }      
    })
});
addButtons.forEach((item,index) => {
    item.addEventListener('click', function(){
        console.log(this.form);

        dishNumberStored = dishCounters[index].getAttribute('value');
        console.log(dishNumberStored);
        dishNumberStored++;

        dishCounters[index].setAttribute('value', dishNumberStored);
    })
});

console.log(remButtons);
console.log(addButtons);

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