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

        addHoverEffect(squareGrid);
        
        mainBox.appendChild(squareGrid);
    }
    
}

function sizeBtn() {
    const gridSizeBtn = document.querySelector("#gridSize");

    gridSizeBtn.addEventListener("click", () => {
        let size = Number(prompt("Please enter a grid size number between 1 and 100 (total grid = size x size): "));
        
        if (size > 0 && size <= 100) {
            createGrid(size);
        }else {
            alert("Please enter a number between 1 and 100.");
        }
    })
}

function addHoverEffect(square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "blue";
    })
}
sizeBtn();
createGrid(16);
