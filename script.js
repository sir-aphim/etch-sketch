const gridContainer = document.getElementById('grid')
const brushButton = document.querySelector('.brush')
const clearButton = document.querySelector('.clear')
const rainbowButton = document.querySelector('.rainbow')
const eraseButton = document.querySelector('.eraser')
const input = document.getElementById('color-picker')

let slider = document.getElementById('myRange')
let output = document.getElementById('demo')
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

slider.addEventListener('input', function() {
    let gridPixels = 480 / slider.value;
    for (const box of boxes) {
        box.style.backgroundColor = 'white';
    }
    gridContainer.style.gridTemplateRows = `repeat(${slider.value}, ${gridPixels}px)`;
    gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, ${gridPixels}px)`;
});


for (let i = 2; i <= 10000; i++) {
    let element = document.createElement('div')

    // add "i" current number to grid item (i.e, grid_item 1)
    element.classList.add("grid_item")

    gridContainer.appendChild(element)
}


const boxes = document.getElementsByClassName('grid_item')

isClicked = true;

clearButton.addEventListener('click', () => {
    for (const box of boxes) {
        box.style.backgroundColor = 'white';
    }
})

eraseButton.addEventListener('click', () => {
    for (const box of boxes) {
        box.addEventListener("mouseenter", () => {
            if (!isClicked) {
                box.style.backgroundColor = 'white';
            }
        })
    }
})

// try to create function for the grid container event to avoid repetition
rainbowButton.addEventListener("click", () => {
    setRandomColor();
    gridContainer.onclick = function () {
        if (isClicked) {
            isClicked = false;
        } else {
            isClicked = true;
        }
        
    }  
})

brushButton.addEventListener("click", () => {
    setColor();
    gridContainer.onclick = function () {
        if (isClicked) {
            isClicked = false;
        } else {
            isClicked = true;
        }
        
    }
})

gridContainer.onclick = function () {
    if (isClicked) {
        setColor();
        isClicked = false;
    } else {
        isClicked = true;
    }
    
}


input.addEventListener("input", setColor);

function setColor(event) {
    for (const box of boxes) {
        box.addEventListener("mouseenter", () => {
            if (!isClicked) {
                box.style.backgroundColor = input.value;
            }
        })
    }
}

function setRandomColor(event) {
    for (const box of boxes) {
        box.addEventListener("mouseenter", () => {
            if (!isClicked) {
                let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
                box.style.backgroundColor = randomColor;
            }
        })
    }
};
