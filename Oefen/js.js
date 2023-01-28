
let color;
let click = true;

function fillBoard(size) {
    let board = document.querySelector(".board");

    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    let amount = size * size;

    for(i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}

function colorSquare() {
    if (click) {
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board");

    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');   
}

fillBoard(16);

function changeSize(input) {
    if(input < 4) {
        alert("Size cannot be smaller than 4")
    }
    if(input > 100) {
        alert("Size cannot be larger than a 100")
    } else {
        fillBoard(input);
    }
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagname != "buttons") {
        click = !click;
        if(click) {
            document.querySelector('mode').textContent = "Mode: Coloring"
        } else {
            document.querySelector('mode').textContent = "Mode: Not Coloring"
        }
    }
})