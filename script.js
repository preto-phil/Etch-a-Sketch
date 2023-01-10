
// Create a grid of 16 x 16

let gridBox = document.getElementsByClassName('gridBox');
let button = document.getElementById('reset');
let amountBlocks = 0;
let input;

function createDivFunction() {
        
        let createDiv = document.createElement('div');

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
       

/*

function sixteenGrid() {
        for (i = 0; i < 16; i++) {
                
                
                // createDivFunction();

                // Append block vertically down
                
                
                
                for (j = 0; j < 16; j++) {
                        
                        // createDivFunction;

                        // Append block horizontally
                }
        }        
}


*/


function getInput() {
        input = prompt("How many blocks?");
        
        if (isNaN(input)) {
                getInput();
        }
        
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
