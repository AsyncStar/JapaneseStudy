import * as grammarData from "./grammarData.js";

// ---------- Get selected radio values ----------

function getSelected(name) {
   const selector = `input[name="${name}"]:checked`;
   const radio = document.querySelector(selector);

   if (radio === null) {
       return null;
   }
   return radio.value;
}


// ---------- Find the matching ending ----------

function findEnding(rules, ending) {
    return rules.find(function(el) {
        return el.endingKana === ending;
    });
}

function updateConjugation() {


    const type = getSelected("type");
    const kana = getSelected("kana");


    let rules;

    if (type === "teForm") {
        rules = grammarData.verbConjugations.teForm;
    } else {
        const tense = getSelected("tense");
        const form = getSelected("form");
        const polarity = getSelected("polarity");

        rules = grammarData.verbConjugations[tense][form][polarity];
    }

    const match = findEnding(rules, kana);

    document.getElementById("conjugation-result").innerHTML = match.result;
}

console.log("test");
const conjugationRadios = document.querySelectorAll(
    `#conjugator-container input[type="radio"]`
);

console.log(conjugationRadios);

conjugationRadios.forEach(function(radio) {
    radio.addEventListener("change", updateConjugation);
});