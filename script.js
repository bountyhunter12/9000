const gridContainer = document.getElementById('box');
const message = document.getElementById('message');

const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let x = 0, y = 0;

function renderGrid() {
    gridContainer.innerHTML = '';
    grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('grid-cell');
            if (rowIndex === y && colIndex === x) {
                cellElement.classList.add('ship');
                cellElement.textContent = 'S';
            } else {
                cellElement.textContent = cell;
            }
            gridContainer.appendChild(cellElement);
        });
        const br = document.createElement('br');
        gridContainer.appendChild(br);
    });
}

function move(direction) {
    switch(direction) {
        case 'U':
            if (y > 0 && grid[y - 1][x] === 0) {
                y--;
            }
            else if(x === grid[0].length - 1 && y === grid.length - 1) {
                message.textContent = "Congratulations! You've passed through the field.";
                return;
            }
            else {
                message.textContent = "Can't move up, there's an asteroid or the edge of the field!";
                return; // Exit the function if there's an error
            }
            break;
        case 'D':
            if (y < grid.length - 1 && grid[y + 1][x] === 0) {
                y++;
            }
            else if(x === grid[0].length - 1 && y === grid.length - 1) {
                message.textContent = "Congratulations! You've passed through the field.";
                return;
            }
            else {
                message.textContent = "Can't move down, there's an asteroid or the edge of the field!";
                return; // Exit the function if there's an error
            }
            break;
        case 'L':
            if (x > 0 && grid[y][x - 1] === 0) {
                x--;
            }
            else if(x === grid[0].length - 1 && y === grid.length - 1) {
                message.textContent = "Congratulations! You've passed through the field.";
                return;
            }
            else {
                message.textContent = "Can't move left, there's an asteroid or the edge of the field!";
                return; // Exit the function if there's an error
            }
            break;
        case 'R':
            if (x < grid[0].length - 1 && grid[y][x + 1] === 0) {
                x++;
            }
            else if(x === grid[0].length - 1 && y === grid.length - 1) {
                message.textContent = "Congratulations! You've passed through the field.";
                return;
            }
            else {
                message.textContent = "Can't move right, there's an asteroid or the edge of the field!";
                return; // Exit the function if there's an error
            }
            break;
        default:
            message.textContent = "Invalid move! Enter R for right, D for down, L for left, U for up, Q to quit.";
            return; // Exit the function if the move is invalid
    }
    renderGrid();
    
}

function reset() {
    x = 0;
    y = 0;
    message.textContent = '';
    renderGrid();
}

function checkEnd() {
    if (x === grid[0].length - 1 && y === grid.length - 1) {
        message.textContent = "Congratulations! You've passed through the field.";
        return;
    }
}

function quit() {
    message.textContent = "Game over.";
}

renderGrid();
