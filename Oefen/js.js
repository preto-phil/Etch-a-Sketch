
function fillBoard(size) {
    let board = document.querySelector(".board");

    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    let amount = size * size;

    for(i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement("beforeend", square);
    }
}

fillBoard(16);

function changeSize(input) {
    fillBoard(input);
}