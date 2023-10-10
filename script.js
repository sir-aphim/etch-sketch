const parent = document.getElementById('grid')
const eraseButton = document.querySelector('.erase')
const input = document.getElementById('color-picker')

for (let i = 2; i <= 256; i++) {
    let element = document.createElement('div')

    // add "i" current number to grid item (i.e, grid_item 1)
    element.classList.add("grid_item")

    parent.appendChild(element)
}


const boxes = document.getElementsByClassName('grid_item')

eraseButton.addEventListener('click', () => {
    for (const box of boxes) {
        box.style.backgroundColor = 'white';
    }
})

setColor();
input.addEventListener("input", setColor);

function setColor() {
    for (const box of boxes) {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = input.value;
        })
    }
}

let slider = document.getElementById('myRange')
let output = document.getElementById('demo')
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}