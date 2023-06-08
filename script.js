const container = document.querySelector('.grid_container');

/*function addSquare(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
}

addSquare(256);*/

function createGrid(rows, columns) {
    for(let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < columns; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
        container.appendChild(row)
    }
}

createGrid(16, 16);