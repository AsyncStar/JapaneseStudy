import * as grammarData from "./grammarData.js";

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