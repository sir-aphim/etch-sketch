const gridContainer = document.getElementById('grid')
const eraseButton = document.querySelector('.erase')
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

eraseButton.addEventListener('click', () => {
    for (const box of boxes) {
        box.style.backgroundColor = 'white';
    }
})

setColor()
input.addEventListener("input", setColor);

function setColor(event) {
    for (const box of boxes) {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = input.value;
        })
    }
}



