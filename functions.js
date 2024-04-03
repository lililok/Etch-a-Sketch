const container = document.getElementById("container");
const prompt = document.getElementById("prompt");
const MAX = 100;

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'green';
        });
    }
}

