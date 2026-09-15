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

function renderSelectedValue(elem, destination) {
    const activeButton = elem.querySelector('.segment.active');
    const selectedValue = activeButton.dataset.value;

    const valueArray = data[selectedValue];
    createTile(valueArray, destination);
}


function segmentedControl() {
    const control = document.querySelectorAll('.segmented-control');

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

segmentedControl();

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


/* need to do data ughh
function numberInputStepper() {
    const numberInput = document.querySelectorAll('.number-input');
    numberInput.forEach((elem) => {
        elem.querySelector('.number-input').addEventListener('input', e => {

        })
    })
}
 */