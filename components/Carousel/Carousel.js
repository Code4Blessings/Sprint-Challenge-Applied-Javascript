/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button">Left Button</div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button">Right Button</div>
  </div>
*/

function CarouselBuilder() {
  //Elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightButton = document.createElement('div');

  //Classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  //Text Content
  leftButton.textContent = 'Left Button';
  mountains.src = "./assets/carousel/mountains.jpeg";
  computer.src = "./assets/carousel/computer.jpeg";
  trees.src = "./assets/carousel/trees.jpeg";
  turntable.src = "./assets/carousel/turntable.jpeg"
  rightButton.textContent = "Right Button";

  //Structure
  carousel.appendChild(leftButton);
  carousel.append(mountains);
  carousel.append(computer);
  carousel.append(trees);
  carousel.append(turntable);
  carousel.append(rightButton);

  return carousel;

}

const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(CarouselBuilder());
