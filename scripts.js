let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.querySelector('#color-display');
colorDisplay.textContent = pickedColor;
const messageDisplay = document.querySelector('#message');
const resetBtn = document.querySelector('#reset-btn');
const easyBtn = document.querySelector('#easy-btn');
const hardBtn = document.querySelector('#hard-btn');



easyBtn.addEventListener('click', function () {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    document.querySelector('h1').style.backgroundColor = '#4682b4';
    resetBtn.textContent = 'New colors';

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }

});

hardBtn.addEventListener('click', function () {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    document.querySelector('h1').style.backgroundColor = '#4682b4';
    resetBtn.textContent = 'New colors';


    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
});


resetBtn.addEventListener('click', function () {
    // generate new colors
    colors = generateRandomColors(numSquares);
    // pick new color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    this.textContent = 'New colors';
    // make messageDisplay empty
    messageDisplay.textContent = '';
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    document.querySelector('h1').style.backgroundColor = '#4682b4';
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {

    // add start colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener('click', function () {
        // grab color of cliked square
        const clickedColor = this.style.backgroundColor;
        // conpare cliked color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!!!';
            resetBtn.textContent = 'Play Again?';
            changeRightColors(pickedColor);
            document.querySelector('h1').style.backgroundColor = clickedColor;
        } else {

            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again...';

        }

        
    });
    
    
}

function changeRightColors(color) {

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;

    }
}

function pickColor() {

    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];

}

function generateRandomColors(x) {

    // declare an empty array
    let arr = [];
    // repeat x times
    for (let i = 0; i < x; i++) {
        // add x random colors to array
        arr.push(randomColorRGB());
    }
    // return filled array
    return arr;

}

function randomColorRGB() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}
