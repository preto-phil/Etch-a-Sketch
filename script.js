
// Create a grid of 16 x 16

let gridBox = document.getElementsByClassName('gridBox');
let button = document.getElementById('reset');
let amountBlocks;
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
        
        deleteDiv();

        input = prompt("How many blocks?");
        amountBlocks = Number(input);
        
        createGrid();
});

function createGrid() {      

        for (i = 1; i < amountBlocks; i++) {
                createDivFunction();
        }
}


function deleteDiv() {
        
        let boxChild = gridBox.lastElementChild;
        while (boxChild) {
                gridBox.removeChild(boxChild);
                boxChild = gridBox.lastElementChild;
        }

}




// Next problem to work on
        // Clear all child nodes (content of gridBox div) after clicking reset button