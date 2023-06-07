const container = document.querySelector('.grid_container');

function addSquare(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
}

addSquare(256);