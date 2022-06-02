// grab DOM elements

const tosCheckbox = document.getElementById('tosAgreement');
const showAnimal = document.getElementById('showAnimal');
const animalSection = document.getElementById('animalSection');
const changeAnimal = document.getElementById('changeAnimal');

const animalSelect = document.getElementById('animalSelect');
const animalImage = document.getElementById('animalPic');

const animalName = document.getElementById('animalName');
const nameInput = document.getElementById('nameInput');

const animalBoxOuter = document.getElementById('animalBoxOuter');
const colorSelector = document.getElementById('colorSelector');

const colorSelectorInner = document.getElementById('colorSelectorInner');

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state

tosCheckbox.addEventListener('change', () => {
    showAnimal.disabled = !tosCheckbox.checked;
});

showAnimal.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
    changeAnimal.classList.remove('hidden');
});

animalSelect.addEventListener('change', () => {
    animalImage.src = 'assets/' + animalSelect.value;
});

nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    animalName.textContent = name;
});

colorSelector.addEventListener('change', () => {
    animalBoxOuter.style.backgroundColor = colorSelector.value;
});

colorSelectorInner.addEventListener('change', () => {
    animalImage.style.backgroundColor = colorSelectorInner.value;
});