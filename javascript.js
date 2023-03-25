const playGamePage = document.querySelector('.play-game-page');
const popUp = document.querySelector('.pop-up');
let difficultySetting = 1;



function showMenu() {
    popUp.style.display = 'block';
    playGamePage.style.filter = 'blur(2px)';
}

function checkWinningCases () {
    // Checks to see if there are any winning cases
        // Switch cases to identify win cases
    
}

function computerDiffEasy () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.easy');
    selectDiffValue.classList.add('selected');
    return difficultySetting = 1;
}

function computerDiffMedium () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.medium');
    selectDiffValue.classList.add('selected');
    return difficultySetting = 2;
}

function computerDiffHard () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.hard');
    selectDiffValue.classList.add('selected');
    return difficultySetting = 3;
}

function computerDiffImpossible () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.impossible')
    selectDiffValue.classList.add('selected');
    return difficultySetting = 4;
}

function removeSelectedClass () {
    const allSelectionOptions = document.querySelectorAll('.selection.option');
    for (i = 0; i < allSelectionOptions.length; i++) {
        if (allSelectionOptions[i].classList.contains('selected')) {
            allSelectionOptions[i].classList.remove('selected');
        }       
    }
}

function playerSelectedXxxxx () {
    removeSelectedIconClass();
    const selectedPlayerIcon = document.querySelector('.x-selection');
    selectedPlayerIcon.classList.add('selected');
    const playerIcon = 1;
    const computerIcon = 0;
}

function playerSelectedOoooo () {
    removeSelectedIconClass();
    const selectedPlayerIcon = document.querySelector('.o-selection');
    selectedPlayerIcon.classList.add('selected');
    const playerIcon = 0;
    const computerIcon = 1;
}

function removeSelectedIconClass () {
    const iconSelectionOptions = document.querySelectorAll('.icon.selection');
    for (i = 0; i < iconSelectionOptions.length; i++) {
        if (iconSelectionOptions[i].classList.contains('selected')) {
            iconSelectionOptions[i].classList.remove('selected');
        }
    }
}


function beginGame() {
    

    pageSwitch();
    // creates both players
    // creates game array
    
    // listens for users input
    // Returns choice and adds it to game array
    
    // Runs computer's choice
    // Returns choice and adds it to game array
    
}

function pageSwitch () {
    const mainMenu = document.querySelector('.first-page');
    const gamePage = document.getElementsByClassName('play-game-page');
    mainMenu.style.display = 'none';
    gamePage.style.display = 'none';
}


// factory function to create both players