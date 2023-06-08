const grid_container = document.querySelector('.grid_container');

function createGrid(grid_number) {
    grid_container.style.gridTemplateColumns = `repeat(${grid_number}, 1fr)`;
    grid_container.style.gridTemplateRows =  `repeat(${grid_number}, 1fr)`;

    for (let i = 0; i < grid_number * grid_number; i++) {
        let div = document.createElement('div');
        div.classList.add('grid_square');
        grid_container.appendChild(div);
    }
}

createGrid(20);
