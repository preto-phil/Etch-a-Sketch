
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

button.addEventListener('click', (pressed) => {
        pressed.target.id;
               
        if (amountBlocks === 0) {
                input = prompt("How many blocks?");
                amountBlocks = Number(input);
                
                createGrid();
        } else {
                deleteDiv();
        }


});

function createGrid() {      

        for (i = 0; i < amountBlocks; i++) {
                createDivFunction();
        }
}


function deleteDiv() {
        
        let deleteDiv = document.getElementsByClassName('newDiv');
        
        deleteDiv[0].remove();
}




// Next problem to work on
        // Clear all child nodes (content of gridBox div) after clicking reset button