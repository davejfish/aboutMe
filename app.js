// grab DOM elements

const tosCheckbox = document.getElementById('tosAgreement');
const showAnimal = document.getElementById('showAnimal');
const animalSection = document.getElementById('animalSection');
const changeAnimal = document.getElementById('changeAnimal');

console.log(animalSection);
console.log(changeAnimal);

tosCheckbox.addEventListener('change', () => {
    showAnimal.disabled = !tosCheckbox.checked;
});

showAnimal.addEventListener('click', () => {
    animalSection.classList.remove('hidden');
    changeAnimal.classList.remove('hidden');
});



// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
