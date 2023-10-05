const parent = document.getElementById('grid')

for (let i = 0; i < 256; i++) {
    let element = document.createElement('div')

    // add "i" current number to grid item (i.e, grid_item 1)
    element.classList.add("grid_item")

    parent.appendChild(element)
}