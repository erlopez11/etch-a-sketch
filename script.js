const grid_container = document.querySelector('.grid_container');

function getGridSize(gridSize) {
    gridSize = prompt('What size grid would you like?')
}

function createGrid(grid_number) {
    grid_container.style.gridTemplateColumns = `repeat(${grid_number}, 1fr)`;
    grid_container.style.gridTemplateRows =  `repeat(${grid_number}, 1fr)`;

    for (let i = 0; i < grid_number * grid_number; i++) {
        let square = document.createElement('div');
        square.classList.add('grid_square');
        grid_container.appendChild(square);

        square.addEventListener('mouseover', changeColor);
        
        
    }
}


function changeColor(event) {
    this.style.backgroundColor = '#3C9EE7';
}


/*var color = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector("div").addEventListener(
"mouseover", function () {
    document.querySelector(".grid_container div").style.background
= color[(Math.floor(Math.random(".grid_container div") * color.length))];
})*/

createGrid(50);



