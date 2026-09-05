import * as grammarData from "./grammarData.js";
import * as data from "./data.js";

// Get selected radio values

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
        document.getElementById("ending-result").innerHTML = masuEnding;

    // Short form handled manually because of unique conjugation pattern and to make it compatible for different voices/modalities/moods/ect
    } else if (form === "short")  {
        if (tense === "past") {
            if (polarity === "affirmative") {
                if (voiceModality === "standard") {
                    rules = grammarData.shortForm.past.standardAffirmative;
                    } else {
                    rules = grammarData.verbVowelChanges.potential.vowelShift;
                    document.getElementById("ending-result").innerHTML = grammarData.shortForm.past.potentialAffirmative;}
               }
            if (polarity === "negative") {
                document.getElementById("ending-result").innerHTML = grammarData.shortForm.past.negative ;
            }
        } else {
            if (polarity === "affirmative") {
                document.getElementById("ending-result").innerHTML = grammarData.shortForm.present.affirmative;
            } else {
                document.getElementById("ending-result").innerHTML = grammarData.shortForm.present.negative;
            }

        }
    } else {
        document.getElementById("ending-result").innerHTML = "";
    }

    match = findEnding(rules, kana);

    document.getElementById("kana-result").innerHTML = match.result;

}
const verbConjugationRadios = document.querySelectorAll(
    `#VerbConjugator input[type="radio"]`
);


verbConjugationRadios.forEach(function(radio) {
    radio.addEventListener("change", updateVerbConjugation);
});

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

function onTabClick(event) {
    let clickedTab = event.target.parentElement;
    let currentGroup = clickedTab.parentElement.parentElement;
    let allTabs = currentGroup.querySelectorAll(".tab");
    const link = clickedTab.querySelector("a");
    console.log("clickedTab", clickedTab);
    console.log("Link", link);
    const paneID = link.getAttribute("href").slice(1);
    const destination = document.getElementById(paneID);

    allTabs.forEach(function(tab) {
        tab.classList.remove('active');

        let panel = document.getElementById(tab.querySelector('a').href.split('#')[1]);
        panel.classList.remove('active');
    });

    clickedTab.classList.add('active');
    const dataArray = data[paneID];
    createTile(dataArray, destination);

    let clickedPanel = document.getElementById(
        clickedTab.querySelector('a').href.split('#')[1]
    );

    clickedPanel.classList.add('active');
}

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

const tabElements = document.querySelectorAll('.tab');

tabElements.forEach(function(tabElement) {
    tabElement.addEventListener('click', onTabClick);
});



const tileElements = document.querySelectorAll('.tile');
tileElements.forEach(function(tileElement) {
    tileElement.addEventListener('click', openModal);
})
