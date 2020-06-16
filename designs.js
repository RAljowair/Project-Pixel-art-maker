// Select color input
const colorPicker = document.getElementById("colorPicker");
// Select size input
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const pixelCanvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (e){
    e.preventDefault();
    
    const resetRows = document.querySelectorAll('tr');
    
    for(var i = 0 ; i < resetRows.length ; i++){
        resetRows[i].remove();
    }
    
    makeGrid();
})

// Convert color value from hex to rgb.


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

    var allCells = document.querySelectorAll('td');

    for(var i = 0; i < allRows.length ; i++){
        allRows[i].setAttribute('id', 'row-' + i);
    }

    for(var i = 0; i < allCells.length ; i++){
        allCells[i].setAttribute('id', 'cell-' + i);
        allCells[i].addEventListener('click', function (e){
            e.preventDefault;

            
            if(this.style.backgroundColor == 'rgb(255, 255, 255)'){
                this.style.backgroundColor = colorPicker.value;
            }else if(this.style.backgroundColor == colorPicker.value){
                this.style.backgroundColor = 'rgb(255, 255, 255)';
            }
        })
    }
    
    document.getElementById('sizePicker').reset();
}

