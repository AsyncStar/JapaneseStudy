import * as data from './data.js';

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

function createTileSingle(data, destination) {
    const front = data.front;
    const back = data.back;
    const reading = data.reading;
    const tileFront = document.createElement('span');
    tileFront.dataset.back = back;
    tileFront.dataset.reading = reading;
    tileFront.classList.add('tile');
    tileFront.innerHTML = front;
    destination.appendChild(tileFront);
}

function renderSelectedValue(elem, destination) {
    const activeButton = elem.querySelector('.segment.active');
    const selectedValue = activeButton.dataset.value;

    const valueArray = data[selectedValue];
    createTile(valueArray, destination);
}

function getActiveValue(control) {
    const active = control.querySelector('.segment.active');
    console.log(active);
    return active ? active.dataset.value : null;
}

function getData(value) {
    return data[value];
}

function segmentedControlTile() {
    const control = document.querySelectorAll('.segmented-control-tile');

    control.forEach((elem) => {
        const destination = elem.nextElementSibling
        renderSelectedValue(elem, destination);

        elem.addEventListener('click', e => {
            const button = e.target.closest('.segment');
            if (!button) return;

            elem.querySelectorAll('.segment').forEach(seg => {
                seg.classList.remove('active');
            });

            button.classList.add('active');
            destination.innerHTML = "";
            const selectedValue = getActiveValue(elem);
            console.log('Selected: ', selectedValue);
            const valueArray = getData(selectedValue);
            createTile(valueArray, destination);
        });
    })
}

function segmentedControlSection() {
    const control = document.querySelectorAll('.segmented-control-section');

    control.forEach((elem) => {
        const parent = elem.parentElement;
        const destinations = parent.querySelectorAll('.destination-option');

        elem.addEventListener('click', e => {
            const button = e.target.closest('.segment');
            if (!button) return;

            elem.querySelectorAll('.segment').forEach(seg => {
                seg.classList.remove('active');
            })

            button.classList.add('active');
            const targetButton = elem.querySelector('.segment.active');
            const targetValue = targetButton.dataset.value;

            destinations.forEach(dest => {
                if (dest.dataset.value === targetValue) {
                    dest.classList.add('active');
                } else {
                    dest.classList.remove('active');
                }
            })


        })
    })

}

function segmentedControlKana() {
    const control = document.querySelectorAll('.segmented-control-kana');

    control.forEach((elem) => {

        elem.addEventListener('click', e => {
            const button = e.target.closest('.segment');
            if (!button) return;

            elem.querySelectorAll('.segment').forEach(seg => {
                seg.classList.remove('active');
            });

            button.classList.add('active');
            verbConjugator();

        });
    })

}

segmentedControlTile();
segmentedControlSection();
segmentedControlKana();

function selectorPrevNext() {
    const selector = document.querySelectorAll('.selector');
    selector.forEach((elem) => {
        const optionsContainer = elem.querySelector('.options-container');
        const options = optionsContainer.querySelectorAll('.selectee');
        const totalOptions = optionsContainer.childElementCount;
        let currentIndex = 0;

        const prevBtn = elem.querySelector('.btn-prev');
        const nextBtn = elem.querySelector('.btn-next');

        nextBtn.addEventListener('click', e => {
            console.log("Total options: ", totalOptions);
            currentIndex = (currentIndex + 1) % totalOptions;

            options.forEach((option) => {
                option.classList.remove('active');
            })
            options[currentIndex].classList.add('active');
            console.log("Current Index: ", currentIndex);
            console.log("Selector Value: ", options[currentIndex].getAttribute('data-value'));
        })

        prevBtn.addEventListener('click', e => {
            currentIndex = (currentIndex - 1 + totalOptions) % totalOptions;

            options.forEach((option) => {
                option.classList.remove('active');
            })
            options[currentIndex].classList.add('active');
            console.log("Selector Value: ", options[currentIndex].getAttribute('data-value'));

            console.log("Current Index: ", currentIndex);
        })


    })
}

selectorPrevNext();

function cycler() {
    const cyclers = document.querySelectorAll('.cycler');


    cyclers.forEach((elem) => {
        const items = elem.querySelectorAll('.cycle');
        const totalOptions = items.length;
        let currentIndex = 0;

        items.forEach((opt, index) => {

            opt.addEventListener('click', e => {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % totalOptions;


                items[currentIndex].classList.add('active');

                if (elem.closest('#verb-conjugator')) {
                    verbConjugator(cycler);
                }
            })

        })
    })


}

cycler();

function renderSelectedNumber(value, destination) {
    const inputtedNumber = value.getAttribute('value');
    const currentNumber = inputtedNumber - 1;
    const valueParent = value.parentElement.parentElement;
    /*console.log(valueParent);*/
    const valueArray = data[valueParent.dataset.value];
    /*console.log('Array: ', valueArray);*/
    const arrayPosition = valueArray[currentNumber];
    /*console.log(arrayPosition);*/
    createTileSingle(arrayPosition, destination);

}
function numberInputter() {
    const numberInput = document.querySelectorAll('.number-input');

    numberInput.forEach((elem) => {

        const numberSelector = elem.parentElement.parentElement;
        const min = numberSelector.dataset.min;
        const max = numberSelector.dataset.max;
        /*console.log(numberSelector);*/
        const valueArray = data[numberSelector.dataset.value];
        /*console.log('Array: ', valueArray);*/
        const destination = numberSelector.querySelector('.destination');
        /*console.log(destination);*/
        renderSelectedNumber(elem, destination);

        const minusBtn = numberSelector.querySelector('.btn-minus');
       /* console.log(minusBtn);*/
        const plusBtn = numberSelector.querySelector('.btn-plus');
        /*console.log(elem)*/


        elem.addEventListener('input', e => {
            const inputtedNumber = elem.valueAsNumber;
           /* console.log('Input: ', inputtedNumber);*/
            const currentNumber = inputtedNumber - 1;
            const arrayPosition = valueArray[currentNumber];
            destination.innerHTML = "";
            createTileSingle(arrayPosition, destination);
        })

        minusBtn.addEventListener('click', e => {
            console.log("Minus btn event fired")
            if (elem.valueAsNumber > min) {
                elem.valueAsNumber--;
                const inputtedNumber = elem.valueAsNumber;
                const currentNumber = inputtedNumber - 1;
                const arrayPosition = valueArray[currentNumber];
                destination.innerHTML = "";
                createTileSingle(arrayPosition, destination);

            }
        })

        plusBtn.addEventListener('click', e => {
            if (elem.valueAsNumber < max) {
                elem.valueAsNumber++;
                const inputtedNumber = elem.valueAsNumber;
                const currentNumber = inputtedNumber - 1;
                const arrayPosition = valueArray[currentNumber];
                destination.innerHTML = "";
                createTileSingle(arrayPosition, destination);


            }

        })
    })

}
numberInputter();

function verbConjugator() {
    let vowelShift = data.vowels.iRow;
    let ending = data.endings.polite.present.affirmative;
    const verbConjugator = document.querySelector('#verb-conjugator');
    const voiceModality = verbConjugator.querySelector('#voice-modality');
    const form = verbConjugator.querySelector('#form');
    const polarity = verbConjugator.querySelector('#polarity');
    const tense = verbConjugator.querySelector('#tense');

    let activeVoiceModality = voiceModality.querySelector('.cycle.active').dataset.value;
    console.log(activeVoiceModality);
    let activeForm = form.querySelector('.cycle.active').dataset.value;
    console.log(activeForm);
    let activePolarity = polarity.querySelector('.cycle.active').dataset.value;
    console.log(activePolarity);
    let activeTense = tense.querySelector('.cycle.active').dataset.value;
    console.log(activeTense);

    // Handle the vowel shift first

    if (activeForm === "polite") {
        if (activeVoiceModality === "standard") {
            vowelShift = data.vowels.iRow;
        }
        if (activeVoiceModality === "potential") {
            vowelShift = data.vowels.eRow;
        }
    } else if (activeForm === "short") {
        if (activeVoiceModality === "standard") {
            vowelShift = data.vowels.dictionary;
            if (activePolarity === "negative") {
                vowelShift = data.vowels.aRow;
            }

            if (activePolarity === "affirmative" && activeTense === "past") {
                vowelShift = data.vowels.nTaDaRow;
            }
        }
        if (activeVoiceModality === "potential") {
            vowelShift = data.vowels.eRowDictionary;

            if (activePolarity === "negative" || activeTense === "past") {
                vowelShift = data.vowels.eRow;
            }

            if (activePolarity === "affirmative" && activeTense === "past") {
                vowelShift = data.vowels.eTaDaRow;
            }



        }
    } else if (activeForm === "te-form") {
        if (activeVoiceModality === "standard") {
            vowelShift = data.vowels.baseTe;
        }
        if (activeVoiceModality === "potential") {
            vowelShift = data.vowels.eRowTe;
        }
    }

    // Then the ending
    if (activeForm === "polite") {
        if (activeTense === "present") {
            if (activePolarity === "affirmative") {
                ending = data.endings.polite.present.affirmative
            } else {
                ending = data.endings.polite.present.negative;
            }
        } else {
            if (activePolarity === "affirmative") {
                ending = data.endings.polite.past.affirmative
            }
            else { ending = data.endings.polite.past.negative }
        }
    } else if (activeForm === "short") {
        if (activeTense === "present") {
            if (activePolarity === "affirmative") {
                ending = data.endings.short.present.affirmative
            } else {
                ending = data.endings.short.present.negative;
            }
        } else {
            if (activePolarity === "affirmative") {
                ending = data.endings.short.past.affirmative
            }
            else { ending = data.endings.short.past.negative }
        }
    } else {
        ending = data.endings.te.blank;
    }

    // Get kana

    const kanaControl = verbConjugator.querySelector('.segmented-control-kana');
    let activeKana = getActiveValue(kanaControl);
    console.log(activeKana);

    let newKana = vowelShift[activeKana];

    const kanaDest = verbConjugator.querySelector(".kana-dest");
    const endingDest = verbConjugator.querySelector(".ending-dest");

    kanaDest.innerHTML = newKana;
    endingDest.innerHTML = ending;
}