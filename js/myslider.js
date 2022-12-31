
const slider = document.querySelector('.slider');
const sliderItemCount = document.querySelectorAll('.slider-item').length;
const sliderButtonLeft = document.querySelector('.slider-controls .slider-btn.left');
const sliderButtonRight = document.querySelector('.slider-controls .slider-btn.right');

let sliderMoveMultiply = 0;

createDot(sliderItemCount - 1);
const sliderDotControls = document.querySelectorAll('.slider-controls ul li button');

sliderButtonLeft.addEventListener('click', sliderMoveLeft);
sliderButtonRight.addEventListener('click', sliderMoveRight);

sliderDotControls.forEach((item, index) => {
    item.addEventListener('click', function(){
        sliderDotControls[sliderMoveMultiply].classList.remove('active');

        sliderMoveMultiply = index;
        this.classList.add('active');
        slider.style.transform = 'translate(' + sliderMoveMultiply * -100 + '%)';
    })    
});


function sliderMoveRight(){
    if(sliderMoveMultiply === sliderItemCount - 1){
        sliderDotControls[sliderMoveMultiply].classList.remove('active');
        sliderMoveMultiply = 0;
        moveToActiveSlider();

        
    }else{
        sliderDotControls[sliderMoveMultiply].classList.remove('active');
        sliderMoveMultiply++;
        moveToActiveSlider();
        
    }

}
function sliderMoveLeft(){
    if(sliderMoveMultiply === 0){
        
        sliderDotControls[sliderMoveMultiply].classList.remove('active');
        sliderMoveMultiply = sliderItemCount - 1;
        moveToActiveSlider();
        
    }else{
        sliderDotControls[sliderMoveMultiply].classList.remove('active');
        sliderMoveMultiply--;
        moveToActiveSlider();

    }
}

function createDot(dotCount){
    let parentDot = document.querySelector('.slider-controls ul');
    for(i = 0; i < dotCount; i++){
        parentDot.appendChild(document.createElement('li'));
        parentDot.appendChild(document.createElement('li')).appendChild(document.createElement('button'))

    }
}

function moveToActiveSlider(){
    sliderDotControls[sliderMoveMultiply].classList.add('active');
    slider.style.transform = 'translate(' + sliderMoveMultiply * -100 + '%)';
}