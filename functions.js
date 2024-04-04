const container = document.getElementById("container");
const buttonPrompt = document.getElementById("prompt");
const MAX = 100;
const cellSize = parseFloat("480px");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
        square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'yellow';
        });
    }
}

buttonPrompt.addEventListener('click', function () {
    let gridSize = prompt('Enter a number to change the size of grid (max 100): ');
    while (gridSize > 100) {
        gridSize = prompt('Invalid number. Enter a number to change the size of grid (max 100): ');
    }
    container.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.height = `${cellSize / gridSize}px`;
            square.style.width = `${cellSize / gridSize}px`;
            row.appendChild(square);
            square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'yellow';
            });
        }
    }
}); 

