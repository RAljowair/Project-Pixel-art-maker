// Select color input
const COLOR_PICKER = document.getElementById("colorPicker");
// Select size input
const INPUT_HEIGHT = document.getElementById("inputHeight");
const INPUT_WIDTH = document.getElementById("inputWidth");
const PIXEL_CANVAS = document.getElementById('pixelCanvas');
const SIZE_PICKER = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
SIZE_PICKER.addEventListener('submit', function(e) {
    e.preventDefault();
    var resetRows = document.querySelectorAll('tr');
    // for loop to clear the grid.  
    for(var i = 0 ; i < resetRows.length ; i++){
        resetRows[i].remove();
    }
    makeGrid();
})


// MakeGrid() method will create the entire grid and will intilaiz the rows and cells.
function makeGrid() {
    
    rows = INPUT_HEIGHT.value;
    columns = INPUT_WIDTH.value;


    for(var i = 0; i < rows ; i++){
        PIXEL_CANVAS.appendChild(document.createElement('tr'));
        for(var j = 0; j < columns ; j++){
            var allRows = document.querySelectorAll('tr');
            allRows[i].appendChild(document.createElement('td'));
        }
    }

    var allCells = document.querySelectorAll('td');

    for(var i = 0; i < allRows.length ; i++){
        allRows[i].setAttribute('id', 'row-' + i);
    }


    for(var i = 0; i < allCells.length ; i++){
        
        allCells[i].setAttribute('id', 'cell-' + i);

        allCells[i].addEventListener('click', function(e) {
            e.preventDefault;
            // The First click will fill the cell with the chosen color, The second click will clear it from the color.
            if(!(this.style.backgroundColor)){
                this.style.backgroundColor = COLOR_PICKER.value;
            }else {
                this.style.backgroundColor = '';
            }            
        })
    }
}
