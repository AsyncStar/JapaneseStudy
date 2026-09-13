import * as data from "./vocabData.js";

function createTile(data, destination) {
    data.forEach(function(el) {
        const front = el.front;
        const back = el.back;
        const reading = el.reading;
        const tileFront = document.createElement('span');

        tileFront.dataset.back = back;
        tileFront.dataset.reading = reading;
        tileFront.classList.add('tile');

        tileFront.innerHTML = front;

        destination.appendChild(tileFront);

    })
}

function generateTimeTiles() {
    const timePage = document.getElementById("time-page-wrapper")
    const holdsTiles = timePage.querySelectorAll(".holds-tile");

    holdsTiles.forEach(holder => {
        const holderID = holder.id;
        const dataArray = data[holderID];
        createTile(dataArray, holder);
    })
}

generateTimeTiles();
