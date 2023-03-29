

const header = document.querySelector('header');
const main = document.querySelector('main');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const imageContainer = document.querySelector('.image-container');
let activeButton;

rightButton.addEventListener('click', ()=>{
    if(activeButton == leftButton){
        imageContainer.classList.remove('right');
        imageContainer.classList.remove('left');
        activeButton = null;
    }else{
        imageContainer.classList.add('right');
        imageContainer.classList.remove('left');
        activeButton = rightButton;
    }
   
    
});

leftButton.addEventListener('click', ()=>{
    if(activeButton == rightButton){
        imageContainer.classList.remove('right');
        imageContainer.classList.remove('left');
        activeButton = null;
    } else{
        imageContainer.classList.add('left');
        imageContainer.classList.remove('right');
        activeButton = leftButton;
    }
    
});