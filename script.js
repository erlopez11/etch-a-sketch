const grid_container = document.querySelector('.grid_container');
const slider = document.querySelector('.slider');
const output = document.querySelector('.slider_value');
output.innerHTML = slider.value;

const body_dark = document.querySelector('.body_dark');
const font_dark = document.querySelector('.font_dark');
const container_dark = document.querySelector('.container_dark');
const grid_dark = document.querySelector('.grid_dark');
const button_dark = document.querySelector('.button_dark');
const img_dark = document.querySelector('.img_dark');
const dark_range = document.querySelector('#dark_range');
const slider_dark = document.querySelector('.slider_dark::-webkit-slider-thumb');
const value_dark = document.querySelector('.value_dark');
const eye_dark = document.querySelector('.eye_dark');

//update grid size value
slider.oninput = function() {
    return output.innerHTML = this.value;
}

//Create the Sketch Grid Based on Desired Number
function createGrid(grid_number) {
    grid_container.style.gridTemplateColumns = `repeat(${grid_number}, 1fr)`;
    grid_container.style.gridTemplateRows =  `repeat(${grid_number}, 1fr)`;

    for (let i = 0; i <= grid_number * grid_number; i++) {
        let square = document.createElement('div');
        square.classList.add('grid_square');
        grid_container.appendChild(square);

        square.addEventListener('mouseover', changeColor);
        
        
    }
}

//Square Color Change on MouseOver
function changeColor(event) {
    this.style.backgroundColor = '#011999';
}

//Create the Canvas
function createCanvas() {
    let squares = grid_container.querySelectorAll('div');
    squares.forEach(squares => squares.remove());
    createGrid(slider.value);
}
createCanvas();

slider.addEventListener('mouseup', createCanvas);

//Dark Mode

function toggleDark() {
    body_dark.classList.toggle('body_dark');
    font_dark.classList.toggle('font_dark');
    container_dark.classList.toggle('container_dark');
    grid_dark.classList.toggle('grid_dark');
    button_dark.classList.toggle('button_dark');
    img_dark.classList.toggle('img_dark');
    value_dark.classList.toggle('value_dark');
    eye_dark.classList.toggle('eye_dark');
    dark_range.classList.toggle('dark_range');
    slider_dark.classList.toggle('slider_dark::-webkit-slider-thumb');
}
