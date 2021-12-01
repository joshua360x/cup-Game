// import functions and grab DOM elements

// let state
const cup1Btn = document.getElementById('cup1');
const cup2Btn = document.getElementById('cup2');
const cup3Btn = document.getElementById('cup3');

const resetBtn = document.getElementById('hardReset');


const cup1Container = document.getElementById('cup1Contain');
const cup2Container = document.getElementById('cup2Contain');
const cup3Container = document.getElementById('cup3Contain');


const winsEl = document.getElementById('win');
const lossesEl = document.getElementById('loss');
const totalEl = document.getElementById('total');

const hidingPlaces = [
    'cup1',
    'cup2',
    'cup3'
];

let win = 0;
let losses = 0;
let totalGuesses = 0;

function resetStyle() {
    cup1Container.src = './assets/non-active.png';
    cup2Container.src = './assets/non-active.png';
    cup3Container.src = './assets/non-active.png';
}

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}


function handleGuess(userGuess, correctGuess) {
// should reset the styles
    setTimeout(resetStyle, 500);
    // then increment the guesses
    totalGuesses++;
    // then grab the appropriate container element for the correct guess from the DOM
    let correctHiding = document.getElementById(`${correctGuess}Contain`);
    // console.log(correctHiding);
    // then add the face class to that element so that the face shows up
    correctHiding.src = './assets/active.png';
    // then if the user guess is correct, increment the correct guesses
    if (userGuess === correctGuess) {
        win++; 
    } else {
        losses++;
    }
    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
    totalEl.textContent = totalGuesses;
    winsEl.textContent = win;
    lossesEl.textContent = losses;

 
}



  
  // set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
cup1Btn.addEventListener('click', () => {
    
    let chooseRand = getRandomItem(hidingPlaces);
    // console.log(chooseRand, 'choosen');
    handleGuess('cup1', chooseRand);
});


cup2Btn.addEventListener('click', () => {
    let chooseRand = getRandomItem(hidingPlaces);
    // console.log(chooseRand, 'choosen');
    handleGuess('cup2', chooseRand);
});


cup3Btn.addEventListener('click', () => {
    let chooseRand = getRandomItem(hidingPlaces);
    // console.log(chooseRand, 'choosen');
    handleGuess('cup3', chooseRand);
});

resetBtn.addEventListener('click', () => {
    resetStyle();
    win = 0;
    losses = 0;
    totalGuesses = 0;
    totalEl.textContent = totalGuesses;
    winsEl.textContent = win;
    lossesEl.textContent = losses;
});
