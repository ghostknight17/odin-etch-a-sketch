const screen = document.querySelector('.screen');
const resetButton = document.querySelector('.reset-button');
let pickedNum = 16;
let squareDiv;

createCanvas();

resetButton.addEventListener('click', () => {
  screen.innerHTML = '';
  pickedNum = Number(
    prompt(
      'Enter how many squares per side you want the canvas to be (maximum 100 squares)',
      `${pickedNum}`
    )
  );
  createCanvas();
});

function createCanvas() {
  if (pickedNum > 100) pickedNum = 100;
  for (let i = 0; i < pickedNum ** 2; i++) {
    squareDiv = document.createElement('div');
    getResolution(pickedNum);
    screen.appendChild(squareDiv);
    leaveTrace(squareDiv);
  }
}

function leaveTrace(element) {
  element.addEventListener('mouseover', (e) => {
    e.target.classList.add('hover');
  });
}

function getResolution(pickedNum) {
  squareDiv.setAttribute(
    'style',
    `width: ${(1 / pickedNum) * 100}%; height: ${(1 / pickedNum) * 100}%`
  );
}
