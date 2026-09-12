import * as conjugationData from "./conjugationData.js";
import * as data from "./vocabData.js";

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
           rules = conjugationData.verbVowelChanges[voiceModality].vowelShift;
        } else {
            rules = conjugationData.verbVowelChanges[voiceModality].dictionary; }
    } else if (form === "polite") {
        rules = conjugationData.verbVowelChanges[voiceModality].iRow;
    } else {
        rules = conjugationData.verbVowelChanges[voiceModality].teForm;
    }

    // Adding masu conjugations if polite is selected
    let masuEnding = conjugationData.masuEnding[tense][polarity];
    if (form === "polite") {
        document.getElementById("result__ending").innerHTML = masuEnding;

    // Short form handled manually because of unique conjugation pattern and to make it compatible for different voices/modalities/moods/ect
    } else if (form === "short")  {
        if (tense === "past") {
            if (polarity === "affirmative") {
                if (voiceModality === "standard") {
                    rules = conjugationData.shortForm.past.standardAffirmative;
                    } else {
                    rules = conjugationData.verbVowelChanges.potential.vowelShift;
                    document.getElementById("result__ending").innerHTML = conjugationData.shortForm.past.potentialAffirmative;}
               }
            if (polarity === "negative") {
                document.getElementById("result__ending").innerHTML = conjugationData.shortForm.past.negative ;
            }
        } else {
            if (polarity === "affirmative") {
                document.getElementById("result__ending").innerHTML = conjugationData.shortForm.present.affirmative;
            } else {
                document.getElementById("result__ending").innerHTML = conjugationData.shortForm.present.negative;
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

function triggerDrawer() {


    const drawerWrappers = document.querySelectorAll(".drawer__wrapper");
    drawerWrappers.forEach(wrapper => {
        const trigger = wrapper.querySelector(".drawer__trigger");
        trigger.addEventListener("click", (event) => {
            wrapper.classList.toggle("open");
        })
    })

}

triggerDrawer();


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


// Modal

function openModal(event) {
    // get tile data
    const tile = event.target;
    const tileBack = tile.dataset.back;
    const tileReading = tile.dataset.reading;

    // get modal destinations
    const modal = document.getElementById("vocab-modal");
    const modalFront = document.getElementById("modal-front");
    const modalReading = document.getElementById("modal-reading");
    const modalReveal  = document.getElementById("modal-reveal");

    modalFront.textContent = tile.textContent;
    modalReading.innerHTML = tileReading;

    modal.showModal()

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            const rect = modal.getBoundingClientRect()

            const isOutside = (
                event.clientX < rect.left || event.clientX > rect.right ||
                event.clientY < rect.top || event.clientY > rect.bottom
            );

            if (isOutside) {
                modal.close()
            }
        }
    });

    modalReveal.addEventListener("click", function() {
        modalReveal.textContent = tileBack;
    })

}
// Tab
function onTabClick(event) {
    console.log(document.querySelector("#conjugator-section").getBoundingClientRect());
    // Close tab drawer on click
    const tabSection = event.target.closest(".tab__section");
    const drawer = tabSection.querySelector(".drawer__wrapper.open");
    if (drawer) {
        drawer.classList.toggle("open");
    }

    let clickedTab = event.target.parentElement;
    const group = clickedTab.dataset.group;
    let allTabs = document.querySelectorAll(`.tab[data-group="${group}"]`);

    // CLear this group's old pane
    allTabs.forEach(function(tab) {
        tab.classList.remove('active');

       const oldPaneID = tab.querySelector("a").getAttribute("href").slice(1);
       const oldPane = document.getElementById(oldPaneID);
       oldPane.classList.remove('active');
       oldPane.innerHTML = "";

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

    destination.classList.add('active');
    const tileElements = document.querySelectorAll(".tile");
    tileElements.forEach(function(tileElement) {
        tileElement.addEventListener("click", (openModal));
    });



    console.log(document.querySelector("#conjugator-section").getBoundingClientRect());
}

const tabElements = document.querySelectorAll('.tab');

tabElements.forEach(function(tabElement) {
    tabElement.addEventListener('click', onTabClick);
});
