// grab DOM elements

const tosCheckbox = document.getElementById('tosAgreement');
const showAnimal = document.getElementById('showAnimal');

tosCheckbox.addEventListener('change', () => {
    console.log('entered function');
    showAnimal.disabled = !tosCheckbox.checked;
});

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
