
// Create a grid of 16 x 16

let gridBox = document.getElementsByClassName('gridBox');
let button = document.getElementById('reset');
let amountBlocks = 0;
let input;

function createDivFunction() {
        
        let createDiv = document.createElement('div');

        createDiv.style.width = "5px";
        createDiv.style.height = "5px";
        createDiv.style.display = "inline-block";
        createDiv.classList.add('newDiv')


        let emptyDiv = document.createTextNode('');
        createDiv.appendChild(emptyDiv);
        gridBox[0].appendChild(createDiv);
}



function letsGo() {
        if (amountBlocks === 0) {
                getInput();
                
                createGrid();
        } else {
                while (amountBlocks > 0) {
                        deleteDiv();
                
                }
                
                letsGo();
        }
}        
       

function getInput() {
        input = prompt("How many blocks?");
        // if typeof != number then repeat
        amountBlocks = Number(input);
}


function createGrid() {      

        for (i = 0; i < amountBlocks; i++) {
                createDivFunction();
        }
}


function deleteDiv() {
        
        let deleteDiv = document.getElementsByClassName('newDiv');
        
        deleteDiv[0].remove();

        amountBlocks = amountBlocks - 1;
}




// Next problem to work on
        // Clear all child nodes (content of gridBox div) after clicking reset button