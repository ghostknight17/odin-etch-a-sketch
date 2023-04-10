const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset-button');
let pickedNum = 16;
let squareDiv;

createCanvas();

resetButton.addEventListener('click', () => {
  pickedNum = prompt('how many squares per side?', 16);
  createCanvas();
});

function createCanvas() {
  for (let i = 0; i < pickedNum ** 2; i++) {
    squareDiv = document.createElement('div');
    container.appendChild(squareDiv);
    leaveTrace(squareDiv);
  }
}

function leaveTrace(element) {
  element.addEventListener('mouseover', (e) => {
    e.target.classList.add('hover');
  });
}
