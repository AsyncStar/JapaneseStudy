import { sentencePatterns, grammarNotes, functionVerbs, communicationVerb, movementVerb, dailyRoutineVerbs,
    learningVerbs, feelingVerb, commonActionVerbs, interactionVerbs,
    highFreqAdjectives, feelingAdjectives, opinionAdjectives, propertiesAdjectives,
    livingBeings, commonPlaces, commonObjects, householdFurniture, clothingAccessories,
    Technology, Weather, Body, Transportation, Abstract, WorkSchool, Activities,
    canBeAnyOrder} from "./data.js";


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
let structureAny = document.getElementById("structure-any");

hoverForDetails(sentencePatterns, sentencePatternsPane)
hoverForDetails(grammarNotes, grammarNotesPane)
hoverForDetails(canBeAnyOrder, structureAny)


function createTile(data, destination) {
    data.forEach(function(el) {
        const front = el.front;
        const back = el.back;
        const reading = el.reading;
        const tileFront = document.createElement('span');

        tileFront.dataset.back = back;
        tileFront.dataset.reading = reading;
        tileFront.classList.add('tile');
        tileFront.classList.add('jpn');

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


createTile(functionVerbs, functionVerbPane)
createTile(communicationVerb, communicationVerbPane)
createTile(movementVerb, movementVerbPane)
createTile(dailyRoutineVerbs, dailyRoutineVerbPane)
createTile(learningVerbs, learningVerbPane)
createTile(feelingVerb, feelingVerbPane)
createTile(commonActionVerbs, commonActionVerbPane)
createTile(interactionVerbs, interactionVerbPane)

// adjective verb pane initialization & dom generation
let highFreqAdjectivesPane = document.getElementById("HighFreq");
let feelingAdjectivesPane = document.getElementById("FeelingsAdj");
let propertiesAdjectivesPane = document.getElementById("Properties");
let opinionAdjectivesPane = document.getElementById("Opinions");

createTile(highFreqAdjectives, highFreqAdjectivesPane)
createTile(feelingAdjectives, feelingAdjectivesPane)
createTile(propertiesAdjectives, propertiesAdjectivesPane)
createTile(opinionAdjectives, opinionAdjectivesPane)

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

createTile(livingBeings, livingBeingPane)
createTile(commonPlaces, commonPlacesPane)
createTile(commonObjects, commonObjectsPane)
createTile(householdFurniture, householdFurniturePane)
createTile(clothingAccessories, clothingAccessPane)
createTile(Technology, technologyPane)
createTile(Weather, weatherPane)
createTile(Body, bodyPane)
createTile(Transportation, transportationPane)
createTile(Abstract, abstractPane)
createTile(WorkSchool, workSchoolPane)
createTile(Activities, activitiesPane)

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

    modal.classList.add("jpn");

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
