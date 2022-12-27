// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const reset = document.querySelector('#reset_btn');
const random = document.querySelector('#random');
const eraser = document.querySelector('#eraser');
const black = document.querySelector('#black');

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

// Creates a default grid sized 20 x 20
function defaultGrid(x) {
    makeRows(x);
    makeColumns(x);
    let heightwidth = `${750 / x}px`;
    for(let k = 0; k < cells.length; k++){
        cells[k].setAttribute('style',`height: ${heightwidth}; width: ${heightwidth}`);
    }
}

defaultGrid(50);
changeBGcolor();



//Clearing grid
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}


function resetGrid(){
    let sizeOfGrid = window.prompt("Enter blocks you want on each side: ");
    clearGrid();
    defaultGrid(sizeOfGrid);
    Array.from(cells).forEach(function(cell){
        cell.addEventListener('mouseover',onHoverBlack);
    });
}

// Added hover functionality
function onHoverBlack(){
    this.style.backgroundColor = 'black';
}

function onHoverRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `${r},${g},${b}`;
    this.style.backgroundColor = `rgb(${color})`
}

function erasing(){
    this.style.backgroundColor = 'white'
}

function changeBGcolor(){
    Array.from(cells).forEach(function(cell){
        cell.removeEventListener('mouseover',erasing);
        cell.removeEventListener('mouseover',onHoverRGB);
        cell.addEventListener('mouseover',onHoverBlack);
    });
}

function changeRBGcolor(){
    Array.from(cells).forEach(function(cell){
        cell.removeEventListener('mouseover',changeBGcolor);
        cell.removeEventListener('mouseover',erasing);
        cell.addEventListener('mouseover',onHoverRGB);
    });
}

function changeWhiteBG(){
    Array.from(cells).forEach(function(cell){
        cell.removeEventListener('mouseover',changeBGcolor);
        cell.removeEventListener('mouseover',changeRBGcolor);
        cell.addEventListener('mouseover',erasing);
    });
}

reset.addEventListener('click',resetGrid);
random.addEventListener('click',changeRBGcolor);
eraser.addEventListener('click',changeWhiteBG);
black.addEventListener('click',changeBGcolor);
