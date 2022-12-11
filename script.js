
// Create a grid of 16 x 16

let gridBox = document.getElementsByClassName('gridBox');
let button = document.getElementById('reset');
let amountBlocks;
let input;

function createDivFunction() {
        let createDiv = document.createElement('div');
        let emptyDiv = document.createTextNode('');
        createDiv.appendChild(emptyDiv);
        gridBox[0].appendChild(createDiv);
}

button.addEventListener('click', (pressed) => {
        pressed.target.id;
        input = prompt("How many blocks?");
        amountBlocks = Number(input);
        createGrid();
        console.log(amountBlocks);
        console.log(typeof(amountBlocks));
});

function createGrid() {
        for (i = 0; i <= amountBlocks; i++) {
                createDivFunction();
        }
}














/////////////////////////////////////////////////////////////

//let div = document.createElement('div')
//let divWide = document.getElementById();
//let divTall = document.getElementById();
//let amountDiv;

//// function createDiv (sqr) {}

    // let div = document.createElement('div');

    // div.innerHTML = sqr 

    // let container = document.createElementFragment();




    // Styling properties and values
        // document.getElementById ('  medDiv   ').style.display = 'inline-block';
        // document.getElementById("myImg").style.height = "300px";
        // document.getElementById("myImg").style.width = "300px";`

        // return div.childNodes

////  function that creates x-amount of squares

    // Use loop to create squares
    // for (i = x; i < x; i++)

        // call function that creates square
        // append square inline-block start

//// Use set width and height throughout
//// Size of square = height / number of squares && width / number of squares
        // document.getElementById("myImg").style.height = "300px";
        // document.getElementById("myImg").style.width = "300px";



//// Interact with CSS ?

        // Width = auto;

        // height = auto;


//// Amount of div's 

        // Number of div's width * Number of div's height
        // amountDiv = widthDiv * heightDiv
/* for (i = 0; i === amountDiv; i++) {
     createDiv();   
}

*/
//// Wrap div's

//// Create border for div's

//// Create scalable or adjustable thing to set div width and height amounts