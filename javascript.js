const playGamePage = document.querySelector('.play-game-page');
const popUp = document.querySelector('.pop-up');



function showMenu() {
    popUp.style.display = 'block';
    playGamePage.style.filter = 'blur(2px)';
}

function selectedDiffButton() {
    const selectDiffValue = document.querySelector('.selection.option');
    selectDiffValue.classList.add = 'selected';

    console.log(selectDiffValue);

    console.log(typeof(selectDiffValue))

    console.log(selectDiffValue.value);
    return selectDiffValue;
}

function selectedIconButton() {

}

function beginGame() {
    // creates both players
    // creates game array

    // listens for users input
    // Returns choice and adds it to game array

    // Runs computer's choice
    // Returns choice and adds it to game array

}
function checkWinningCases () {
    // Checks to see if there are any winning cases
        // Switch cases to identify win cases
    
}

function computerDiffEasy () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.easy');
    selectDiffValue.classList.add('selected');
}

function computerDiffMedium () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.medium');
    selectDiffValue.classList.add('selected');
}

function computerDiffHard () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.hard');
    selectDiffValue.classList.add('selected');
}

function computerDiffImpossible () {
    removeSelectedClass();
    const selectDiffValue = document.querySelector('.selection.option.impossible')
    selectDiffValue.classList.add('selected');
}

function removeSelectedClass () {
    const allSelectionOptions = document.querySelectorAll('.selection.option');
    for (i = 0; i < allSelectionOptions.length; i++) {
        if (allSelectionOptions[i].classList.contains('selected')) {
            allSelectionOptions[i].classList.remove('selected');
        }       
    }
}


// factory function to create both players