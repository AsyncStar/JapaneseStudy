import * as data from "./data.js";


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


function hoverForDetails(data, destination) {

    data.forEach(function(el) {
        const front = el.front;
        const back = el.back;

        const hover = document.createElement("span");
        const hoverDetails = document.getElementById('hover-details');
        hover.classList.add('hover');
        hover.innerHTML = front;
        destination.appendChild(hover);

        hover.addEventListener("mouseenter", function () {
            hover.classList.add('hover-active');
            hoverDetails.textContent = back;
        })

        hover.addEventListener("mouseleave", function () {
            hover.classList.remove('hover-active');
            hoverDetails.textContent = "Hover over tile!"
        })
    })
}


let sentencePatternsPane = document.getElementById("sentence-patterns");
let structureAnyPane = document.getElementById("structure-any");

hoverForDetails(data.sentencePatterns, sentencePatternsPane)
hoverForDetails(data.structureAny, structureAnyPane )

function accordionManager() {
    const accordionTitles = document.querySelectorAll(".accordionTitle");

    accordionTitles.forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", () => {
            if (accordionTitle.classList.contains("is-open")) {
                accordionTitle.classList.remove("is-open");
            } else {
                const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
                accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
                    accordionTitleWithIsOpen.classList.remove("is-open");
                });
                accordionTitle.classList.add("is-open");
            }
        });
    });

}

accordionManager();