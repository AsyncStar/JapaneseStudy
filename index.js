import * as data from './data.js';


function openModal(event) {
    // get tile data
    const tile = event.target;
    const tileMeaning = tile.dataset.meaning;
    const tileInfo = tile.dataset.info;
    const tileNote = tile.dataset.note;
    const tileReading = tile.dataset.reading;

    // get modal destinations
    const modal = document.querySelector("#tile-modal");
    const modalTitle = document.querySelector(".modal-title");
    const modalReading = document.querySelector(".modal-reading");
    const modalNote = document.querySelector(".modal-note");
    const modalInfo = document.querySelector(".modal-info");
    const modalMeaning = document.querySelector(".modal-meaning");

    modalTitle.textContent = tile.textContent
    modalReading.innerHTML = `Reading: ${tileReading}`;
    modalMeaning.innerHTML = `Meaning: ${tileMeaning}`;
    modalNote.innerHTML = `Note: ${tileNote}`;
    modalInfo.innerHTML = `Usage info: ${tileInfo}`;

    modal.showModal();

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

}

function createTile(data, destination) {
    data.forEach(function(el) {
        const front = el.front;
        const meaning = el.meaning;
        const reading = el.reading;
        const note = el.note;
        const info = el.info;
        const tileFront = document.createElement('span');

        tileFront.dataset.meaning = meaning;
        tileFront.dataset.reading = reading;
        tileFront.dataset.info = info;
        tileFront.dataset.note = note;
        tileFront.classList.add('tile');

        tileFront.innerHTML = front;

        destination.appendChild(tileFront);

        tileFront.addEventListener('click', (event) => {
            openModal(event);
        })

    })
}

function createTileSingle(data, destination) {
    const front = data.front;
    const meaning = data.meaning;
    const reading = data.reading;
    const note = data.note;
    const info = data.info;
    const tileFront = document.createElement('span');

    tileFront.dataset.meaning = meaning;
    tileFront.dataset.reading = reading;
    tileFront.dataset.info = info;
    tileFront.dataset.note = note;
    tileFront.classList.add('tile');

    tileFront.innerHTML = front;

    destination.appendChild(tileFront);


    tileFront.addEventListener('click', (event) => {
        openModal(event);
    })


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
        const destination = elem.nextElementSibling;
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

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalOptions;

            options.forEach((option) => {
                option.classList.remove('active');
            })
            options[currentIndex].classList.add('active');
        })

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalOptions) % totalOptions;

            options.forEach((option) => {
                option.classList.remove('active');
            })
            options[currentIndex].classList.add('active');

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

            opt.addEventListener('click', () => {
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


        elem.addEventListener('input', () => {
            const inputtedNumber = elem.valueAsNumber;
           /* console.log('Input: ', inputtedNumber);*/
            const currentNumber = inputtedNumber - 1;
            const arrayPosition = valueArray[currentNumber];
            destination.innerHTML = "";
            createTileSingle(arrayPosition, destination);
        })

        minusBtn.addEventListener('click', () => {
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

        plusBtn.addEventListener('click', () => {
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


function toggleDrawer() {


    const drawerWrappers = document.querySelectorAll(".drawer__wrapper");
    drawerWrappers.forEach(wrapper => {
        const trigger = wrapper.querySelector(".drawer__trigger");
        trigger.addEventListener("click", () => {
            wrapper.classList.toggle("open");
        })
    })

}

function closeDrawer(elem) {
    elem.target.closest(".drawer__wrapper").classList.toggle("open");
}

toggleDrawer();


function findDestinationGroup(container, elem) {
    if (!container) {
        console.warn("Target container not found");
        return '';
    }
    const selectedGroup = elem.dataset.group;

    return container.querySelector(`.destination[data-group="${selectedGroup}"]`)

}

function renderTabTiles(value, destination) {
    const valueArray = data[value];
    createTile(valueArray, destination);
}

function tabs(event) {

        const clickedTab = event.target;
        console.log("Clicked tab: ", clickedTab);
        const tabSection = clickedTab.closest(".tab-section");
        const value = clickedTab.dataset.value;
        const group = clickedTab.dataset.group;

        const container = tabSection.querySelector(".container");
        console.log(container);

        if (container) {
            const groupTabs = tabSection.querySelectorAll(`.tab[data-group="${group}"]`);
            groupTabs.forEach(tab => {
                tab.classList.remove("active");
            })
            clickedTab.classList.add('active');
            const groupPane = findDestinationGroup(container, clickedTab);
            console.log("Group Pane: ", groupPane);
            groupPane.innerHTML = "";

            if (groupPane.children.length === 0) {
                renderTabTiles(value, groupPane);
            }
        } else {
            console.warn('Error')
        }



}

const tabElements = document.querySelectorAll('.tab');

tabElements.forEach(function(tabElement) {
    tabElement.addEventListener('click', tabs);
});
