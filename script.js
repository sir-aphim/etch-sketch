const gridContainer = document.getElementById('grid')
const brushButton = document.querySelector('.brush')
const eraseButton = document.querySelector('.erase')
const rainbowButton = document.querySelector('.rainbow')
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
    console.log(gridPixels)
});


for (let i = 2; i <= 10000; i++) {
    let element = document.createElement('div')

    // add "i" current number to grid item (i.e, grid_item 1)
    element.classList.add("grid_item")

    gridContainer.appendChild(element)
}


const boxes = document.getElementsByClassName('grid_item')

isClicked = true;

eraseButton.addEventListener('click', () => {
    for (const box of boxes) {
        box.style.backgroundColor = 'white';
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
            console.log("Drawing is on.")
            isClicked = false;
        } else {
            isClicked = true;
            return console.log("Drawing is off.")
        }
        
    }
})

gridContainer.onclick = function () {
    if (isClicked) {
        setColor();
        console.log("Drawing is on.")
        isClicked = false;
    } else {
        isClicked = true;
        return console.log("Drawing is off.")
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
