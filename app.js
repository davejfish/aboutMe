// grab DOM elements

const tosCheckbox = document.getElementById('tosAgreement');
const showAnimal = document.getElementById('showAnimal');
const animalSection = document.getElementById('animalSection');
const changeAnimal = document.getElementById('changeAnimal');

const animalSelect = document.getElementById('animalSelect');
const animalImage = document.getElementById('animalPic');



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

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
