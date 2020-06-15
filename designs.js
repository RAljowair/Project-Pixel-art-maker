// Select color input
const slectedColor = document.getElementById("colorPicker").innerHTML;

// Select size input
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const pixelCanvas = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', function (e){
    e.preventDefault();
    makeGrid();    
})


function makeGrid() {
    
    rows = inputHeight.value;
    columns = inputWidth.value;

    for(var i = 0; i < rows ; i++){
        pixelCanvas.appendChild(document.createElement('tr'));
        for(var j = 0; j < columns ; j++){
            var allRows = document.querySelectorAll('tr');
            allRows[i].appendChild(document.createElement('td'));
        }
    }
}