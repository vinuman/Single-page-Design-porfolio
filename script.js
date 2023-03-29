const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const imageContainer = document.querySelector('.image-container');
const myWork = document.querySelectorAll('.image-container img');
let activeButton;

let counter = 0;
const size = window.innerWidth < 640? 300 : 540;


imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

rightButton.addEventListener('click', () => {
    console.log(size);
    if (counter >= myWork.length - 1) return;
    imageContainer.style.transition = "transform 0.5s ease-in-out";
    counter++;
    imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    leftButton.disabled = false;
    if (counter === myWork.length - 1) {
        rightButton.disabled = true;
    }
  });
  
  leftButton.addEventListener('click', () => {
    if (counter <= 0) return;
    imageContainer.style.transition = "transform 0.5s ease-in-out";
    counter--;
    imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    rightButton.disabled = false;
    if (counter === 0) {
      leftButton.disabled = true;
    }
  });




