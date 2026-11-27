const mainBox = document.createElement("div");
mainBox.classList.add("container");
document.body.appendChild(mainBox);

function createGrid(size) {
    // clears the mainBox before starting
    mainBox.textContent = "";

    const squareDim = 100 / size;
    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const squareGrid = document.createElement("div");
        squareGrid.classList.add("grid-square");
        
        // set dynamic height and width as a % of the total(parent dim)
        squareGrid.style.width = `${squareDim}%`;
        squareGrid.style.height = `${squareDim}%`;
        
        mainBox.appendChild(squareGrid);
    }
    
}

createGrid(16)