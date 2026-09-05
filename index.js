import * as grammarData from "./grammarData.js";
import * as data from "./data.js";

// Get selected radio values for conjugator

function getSelected(name) {
   const selector = `input[name="${name}"]:checked`;
   const radio = document.querySelector(selector);

   if (radio === null) {
       return null;
   }
   return radio.value;
}


// Find the matching ending

function findEnding(rules, ending) {
    return rules.find(function(el) {
        return el.endingKana === ending;
    });
}


function updateVerbConjugation() {

    const voiceModality = getSelected("voiceModality");
    const kana = getSelected("verbKana");
    const form = getSelected("form");


    const tense = getSelected("tense");
    const polarity = getSelected("polarity");

    const otherRadios = document.querySelectorAll('input[name="tense"],' +
        'input[name="polarity"]');

    if (form === "teForm") {
        otherRadios.forEach((radio) => {
            radio.disabled = true;
        })
    } else {
        otherRadios.forEach((radio) => {
            radio.disabled = false;
        })
    }

    let match;
    let rules;

    // Handling
    if (form === "short") {
         if (polarity === "negative") {
           rules = grammarData.verbVowelChanges[voiceModality].vowelShift;
        } else {
            rules = grammarData.verbVowelChanges[voiceModality].dictionary; }
    } else if (form === "polite") {
        rules = grammarData.verbVowelChanges[voiceModality].iRow;
    } else {
        rules = grammarData.verbVowelChanges[voiceModality].teForm;
    }

    // Adding masu conjugations if polite is selected
    let masuEnding = grammarData.masuEnding[tense][polarity];
    if (form === "polite") {
        document.getElementById("result__ending").innerHTML = masuEnding;

    // Short form handled manually because of unique conjugation pattern and to make it compatible for different voices/modalities/moods/ect
    } else if (form === "short")  {
        if (tense === "past") {
            if (polarity === "affirmative") {
                if (voiceModality === "standard") {
                    rules = grammarData.shortForm.past.standardAffirmative;
                    } else {
                    rules = grammarData.verbVowelChanges.potential.vowelShift;
                    document.getElementById("result__ending").innerHTML = grammarData.shortForm.past.potentialAffirmative;}
               }
            if (polarity === "negative") {
                document.getElementById("result__ending").innerHTML = grammarData.shortForm.past.negative ;
            }
        } else {
            if (polarity === "affirmative") {
                document.getElementById("result__ending").innerHTML = grammarData.shortForm.present.affirmative;
            } else {
                document.getElementById("result__ending").innerHTML = grammarData.shortForm.present.negative;
            }

        }
    } else {
        document.getElementById("result__ending").innerHTML = "";
    }

    match = findEnding(rules, kana);

    document.getElementById("result__kana").innerHTML = match.result;

}
const verbConjugationRadios = document.querySelectorAll(
    `#VerbConjugator input[type="radio"]`
);

verbConjugationRadios.forEach(function(radio) {
    radio.addEventListener("change", updateVerbConjugation);
});
updateVerbConjugation();

function accordionManager() {
    const accordionTitle = document.querySelectorAll(".accordion__title")

    accordionTitle.forEach(title => {
        title.addEventListener("click", (e) => {
            if (title.classList.contains("is-open")) {
                title.classList.remove("is-open");
            } else {
                const openTitles = document.querySelectorAll(".is-open");
                openTitles.forEach(title => {
                    title.classList.remove("is-open");
                });
                title.classList.add("is-open");
            }
        })
    })
}
accordionManager();

function openModal(event) {
    // get tile and data
    const triggerTile = event.target.parentElement;
    const tile = event.target;
    const tileBack = tile.dataset.back;
    const tileReading = tile.dataset.reading;

    // get modal destinations
    const inspectorClear = document.getElementById("inspector__clear");
    const inspectorFront = document.getElementById("inspector__front");
    const inspectorReading = document.getElementById("inspector__reading");
    const inspectorReveal  = document.getElementById("inspector__reveal");


    // Hover to open tile modal
    triggerTile.addEventListener(`mouseover`, ()=> {
        inspectorFront.textContent = tile.textContent;
        inspectorReading.innerHTML = tileReading;
        inspectorReveal.textContent = "Reveal meaning?";
    });


    inspectorClear.addEventListener(`click`, ()=> {
        inspectorFront.textContent = "";
        inspectorReading.innerHTML = "";
        inspectorReveal.textContent = "Hover over a word to inspect!";
    })


    // Hover to reveal reading
    inspectorReveal.addEventListener("mouseover", function() {
        inspectorReveal.textContent = tileBack;
    })

    inspectorReveal.addEventListener("mouseleave", function() {
        inspectorReveal.textContent = "Reveal meaning?";
    })


}

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

// Tab
function onTabClick(event) {
    let clickedTab = event.target.parentElement;
    const group = clickedTab.dataset.group;
    let allTabs = document.querySelectorAll(`.tab[data-group="${group}"]`);

    // CLear this group's old pane
    allTabs.forEach(function(tab) {
        tab.classList.remove('active');

       const oldPaneID = tab.querySelector("a").getAttribute("href").slice(1);
       const oldPane = document.getElementById(oldPaneID);
       oldPane.classList.remove('active');
       oldPane.innerHTMl = "";

    });
    // Get clicked tabs pane
    clickedTab.classList.add('active');
    const paneID = clickedTab.querySelector("a").getAttribute("href").slice(1);
    const destination = document.getElementById(paneID);

    // Generate new tiles
    const dataArray = data[paneID];
    if (destination.children.length === 0) { // can also check with destination.innerHTMl === ""
        createTile(dataArray, destination);
    }


    // Attaching modal event listener
    const tileElements = document.querySelectorAll('.tile');
    tileElements.forEach(function(tileElement) {
        tileElement.addEventListener("mouseover", openModal);
    })

    destination.classList.add('active');

    const openAccordion =
        document.querySelector(".accordion__title.is-open");
    if (openAccordion) {
        openAccordion.classList.remove('is-open');
    }
}

const tabElements = document.querySelectorAll('.tab');

tabElements.forEach(function(tabElement) {
    tabElement.addEventListener('click', onTabClick);
});

// Modal

