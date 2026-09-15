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
            const selectedValue = button.getAttribute('data-value');
            console.log('Selected: ', selectedValue);
            const valueArray = data[selectedValue];
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

segmentedControlTile();
segmentedControlSection();

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