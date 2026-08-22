import { sentencePatterns, grammarNotes} from "./data.js";

function onTabClick(event) {
    let clickedTab = event.target.parentElement;
    let currentGroup = clickedTab.parentElement.parentElement;
    let allTabs = currentGroup.querySelectorAll('.tab');

    allTabs.forEach(function(tab) {
        tab.classList.remove('active');

        let panel = document.getElementById(tab.querySelector('a').href.split('#')[1]);
        panel.classList.remove('active');
    });

    clickedTab.classList.add('active');

    let clickedPanel = document.getElementById(
        clickedTab.querySelector('a').href.split('#')[1]
    );

    clickedPanel.classList.add('active');
}

const tabElements = document.querySelectorAll('.tab');

tabElements.forEach(function(tabElement) {
    tabElement.addEventListener('click', onTabClick);
});


function createTooltip(data, destination) {

    data.forEach(function(el) {
        const front = el.front;
        const back = el.back;
        const hover = document.createElement("span");
        const tooltip = document.createElement("span");

        hover.classList.add('hover');
        tooltip.classList.add('tooltip');
        hover.innerHTML = front;
        tooltip.innerHTML = back;

        hover.appendChild(tooltip);
        destination.appendChild(hover);
    })

}

let sentencePatternsPane = document.getElementById("SentencePatterns");
let grammarNotesPane = document.getElementById("OtherNotes");
createTooltip(sentencePatterns, sentencePatternsPane)
createTooltip(grammarNotes, grammarNotesPane)