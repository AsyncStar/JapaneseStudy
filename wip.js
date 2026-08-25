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


let sentencePatternsPane = document.getElementById("SentencePatterns");
let grammarNotesPane = document.getElementById("OtherNotes");
let structureAnyPane = document.getElementById("structure-any");

hoverForDetails(data.sentencePatterns, sentencePatternsPane)
hoverForDetails(data.grammarNotes, grammarNotesPane)
hoverForDetails(data.structureAny, structureAnyPane )


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

// verb panes initialization & dom creation
let functionVerbPane = document.getElementById("Function");
let communicationVerbPane = document.getElementById("Communication");
let movementVerbPane = document.getElementById("Movement");
let dailyRoutineVerbPane = document.getElementById("DailyRoutine");
let learningVerbPane = document.getElementById("Learning");
let feelingVerbPane = document.getElementById("FeelingsVerb");
let commonActionVerbPane = document.getElementById("OtherCommonActions");
let interactionVerbPane = document.getElementById("ObjectInteraction");


createTile(data.functionVerbs, functionVerbPane)
createTile(data.communicationVerb, communicationVerbPane)
createTile(data.movementVerb, movementVerbPane)
createTile(data.dailyRoutineVerbs, dailyRoutineVerbPane)
createTile(data.learningVerbs, learningVerbPane)
createTile(data.feelingVerb, feelingVerbPane)
createTile(data.commonActionVerbs, commonActionVerbPane)
createTile(data.interactionVerbs, interactionVerbPane)

// adjective verb pane initialization & dom generation
let highFreqAdjectivesPane = document.getElementById("HighFreq");
let feelingAdjectivesPane = document.getElementById("FeelingsAdj");
let propertiesAdjectivesPane = document.getElementById("Properties");
let opinionAdjectivesPane = document.getElementById("Opinions");

createTile(data.highFreqAdjectives, highFreqAdjectivesPane)
createTile(data.feelingAdjectives, feelingAdjectivesPane)
createTile(data.propertiesAdjectives, propertiesAdjectivesPane)
createTile(data.opinionAdjectives, opinionAdjectivesPane)

// noun verb pane initialization & dom generation
let livingBeingPane = document.getElementById("LivingBeings");
let commonPlacesPane = document.getElementById("CommonPlaces");
let commonObjectsPane = document.getElementById("CommonObjects");
let householdFurniturePane = document.getElementById("HouseholdFurniture");
let clothingAccessPane = document.getElementById("ClothingAccessories");
let technologyPane = document.getElementById("Technology");
let weatherPane = document.getElementById("Weather");
let bodyPane = document.getElementById("Body");
let transportationPane = document.getElementById("Transportation");
let abstractPane = document.getElementById("Abstract");
let workSchoolPane = document.getElementById("WorkSchool");
let activitiesPane = document.getElementById("Activities");

createTile(data.livingBeings, livingBeingPane)
createTile(data.commonPlaces, commonPlacesPane)
createTile(data.commonObjects, commonObjectsPane)
createTile(data.householdFurniture, householdFurniturePane)
createTile(data.clothingAccessories, clothingAccessPane)
createTile(data.Technology, technologyPane)
createTile(data.Weather, weatherPane)
createTile(data.Body, bodyPane)
createTile(data.Transportation, transportationPane)
createTile(data.Abstract, abstractPane)
createTile(data.WorkSchool, workSchoolPane)
createTile(data.Activities, activitiesPane)

function openModal(event) {
    // get tile data
    const tile = event.target;
    const tileBack = tile.dataset.back;
    const tileReading = tile.dataset.reading;

    // get modal destinations
    const modal = document.getElementById("vocab-modal");
    const modalClose = document.getElementById("modal-close");
    const modalFront = document.getElementById("modal-front");
    const modalReading = document.getElementById("modal-reading");
    const modalReveal  = document.getElementById("modal-reveal");

    modalFront.textContent = tile.textContent;
    modalReading.innerHTML = tileReading;

    modal.showModal()

    modalClose.addEventListener("click", function() {
        modal.close()
    })

    modalReveal.addEventListener("mouseover", function() {
        modalReveal.textContent = tileBack;
    })

    modalReveal.addEventListener("mouseleave", function() {
        modalReveal.textContent = "Hover to reveal meaning";
    })

}

const tileElements = document.querySelectorAll('.tile');
tileElements.forEach(function(tileElement) {
    tileElement.addEventListener('click', openModal);
})
