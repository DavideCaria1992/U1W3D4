const createNumbers = numbers => {
    const tombola = document.getElementById("tombola")
    for (let i = 0; i < numbers; i++) {
        const numCellDiv = document.createElement("div")
        numCellDiv.className = "number";

        const numCellH2 = document.createElement("h2")
        numCellH2.innerText = i + 1;

        numCellDiv.appendChild(numCellH2);
        tombola.appendChild(numCellDiv);
    }
}

window.onload = () => {
    createNumbers(76);
};