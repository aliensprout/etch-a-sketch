const header = document.querySelector("header");
const container = document.getElementById("container");

const setGridBtn = document.getElementById("setGridBtn");
const input = document.getElementById("setGridInput");

const addSquare = () => {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    return gridSquare;
};

const addRow = (number) => {
    for (let j = 0; j < number; j++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        container.appendChild(gridRow);

        for (let i = 0; i < number; i++) {
            gridRow.appendChild(addSquare());
        }
    }
};

// helper function to set random color
const randomRgbaColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = (Math.random() * 1).toPrecision(3);
    console.log(a);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

container.addEventListener("mouseover", (event) => {
    console.log(event.target.className);
    if (event.target.className === "grid-square") {
        event.target.style.backgroundColor = randomRgbaColor();
    }
})

addRow(input.value);

setGridBtn.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    if (input.value <= 100) {
        gridNumber = input.value;
        console.log(gridNumber);
        addRow(gridNumber);
    }
    else {
        input.value = 100;
        gridNumber = 100;
        console.log(gridNumber);
        addRow(gridNumber);
    }
});
