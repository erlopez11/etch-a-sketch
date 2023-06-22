const grid_container = document.querySelector('.grid_container');
const slider = document.querySelector('.slider');
const output = document.querySelector('.slider_value');
output.innerHTML = slider.value;


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


