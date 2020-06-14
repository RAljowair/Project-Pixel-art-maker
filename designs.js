// Select color input
const slectedColor = document.getElementById("colorPicker").innerHTML;

// Select size input
const gridHeight = document.getElementById("inputHeight").vlaue;
const gridWidth = document.getElementById("inputWidth").vlaue;
const table = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
makeGrid();

function makeGrid() {

    // Your code goes here!
    const cell = document.createElement('td');

    for (var row = 1; row <= gridHeight; row++) {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        for (var column = 1; column <= gridWidth; column++) {
            tableRow.appendChild(cell);
        }
    }
}