document.addEventListener('DOMContentLoaded', () => {
    // Your code here
  
  
const galleryContainer= document.querySelector('.gallery-container');
const galleryControlsContainer= document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add('gallery-item-${i+1}');
        });
}

setCurrentState(direction){
    if (direction.className == 'gallery-controls-previous'){
        this.carouselArray.unshift(this.carouselArray.pop());
     }else{ 
        this.carouselArray.push(this.carouselArray.shift());
     }
     this.updateGallery();
}


pushNext(){
    this.carouselArray.push(this.carouselArray.shift());
     this.updateGallery();
}

setControls() {
    this.carouselControls.forEach(control => {
      const button = document.createElement('button');
      button.classList.add(`gallery-controls-${control}`);
      button.innerText = control;
      galleryControlsContainer.appendChild(button);
      // No need for the following line
      // galleryControlsContainer.appendChild(button).className = `gallery-controls-${control}`;
    });
  }
  
  
  
useControls(){
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
        control.addEventListener('click', e => {
            e.preventDefault();
            this.setCurrentState(control);
        });
    });
}

startAutoSlide() {
    setInterval(() => {
      this.pushNext();
    }, 3000);
  }
  


}

const NathanCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

NathanCarousel.setControls();
NathanCarousel.useControls();
NathanCarousel.startAutoSlide();

});