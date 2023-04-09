const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset-button');
let squareDiv;
for (let i = 0; i < 256; i++) {
  squareDiv = document.createElement('div');
  container.appendChild(squareDiv);
  squareDiv.addEventListener('mouseover', (e) => {
    e.target.classList.add('hover');
  });
}
resetButton.addEventListener('click', () => {
  prompt('how many squares per side?', '16');
});
