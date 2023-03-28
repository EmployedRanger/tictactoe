const playGamePage = document.querySelector('.play-game-page');
const popUp = document.querySelector('.pop-up');
let difficultySetting = 1;



function showMenu() {
    popUp.style.display = 'block';
    playGamePage.style.filter = 'blur(2px)';
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
    RemoveSelectedIconClass();
    const selectedPlayerIcon = document.querySelector('.x-selection');
    selectedPlayerIcon.classList.add('selected');
    const computerIconInsert = document.querySelector('.computer.board-segment');
    computerIconInsert.innerHTML = 'O';
    computerIconInsert.classList.add('o-color');

    const humanIconInsert = document.querySelector('.human.board-segment');
    humanIconInsert.innerHTML = 'X';
    humanIconInsert.classList.add('x-color');
    const playerIcon = 'X';
    const computerIcon = 'O';
    return [playerIcon, computerIcon];
}

function playerSelectedOoooo () {
    RemoveSelectedIconClass();
    const selectedPlayerIcon = document.querySelector('.o-selection');
    selectedPlayerIcon.classList.add('selected');
    const computerIconInsert = document.querySelector('.computer.board-segment');
    computerIconInsert.innerHTML = 'X';
    computerIconInsert.classList.add('x-color');

    const humanIconInsert = document.querySelector('.human.board-segment');
    humanIconInsert.innerHTML = 'O';
    humanIconInsert.classList.add('o-color');

    const playerIcon = 'O';
    const computerIcon = 'X';
    return [playerIcon, computerIcon];
}

function RemoveSelectedIconClass () {
    const iconSelectionOptions = document.querySelectorAll('.icon.selection');
    for (i = 0; i < iconSelectionOptions.length; i++) {
        if (iconSelectionOptions[i].classList.contains('selected')) {
            iconSelectionOptions[i].classList.remove('selected');
        }
    }
}

function PageSwitch () {
    const mainMenu = document.querySelector('.first-page');
    const gamePage = document.getElementsByClassName('play-game-page');
    mainMenu.style.display = 'none';
    gamePage[1].style.display = 'grid';
    ScreenController();
}

const Player = (name, icon) => {
    const getName = () => name;
    const getIcon = () => icon;

    return {
        getName,
        getIcon
    };
}

function Gameboard () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < columns; j++) {
            board[i].push(BoardSegment());
        }
    }

    const getBoard = () => board;

    const selectSquare = (column, player) => {
        const availableSegments = board.filter((row) => row[column].getValue() === '').map(row => row[column]);

        if (!availableSegments.length) return;

        // More stuff here
    };

    const printBoard = () => {
        const boardWithSegmentValues = board.map((row) => row.map((segment) => segment.getValue()));
        console.log(boardWithSegmentValues);
    };

    return { getBoard, selectSquare, printBoard };
}

function BoardSegment() {
    let value = '';

    const addIcon = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {
        addIcon,
        getValue
    };
}

function GameController(
    humanPlayerName = 'Player',
    computerPlayerName = 'Computer'
) {
    const humanPlayer = Player(humanPlayerName, playerIcon);
    const computerPlayer = Player(computerPlayerName, computerIcon);
    const board = Gameboard();


}

function ScreenController() {
    const game = GameController();
    const boardDiv = document.querySelector('.game-board');

    const updateScreen = () => {
        // clears all board segments
        boardDiv.textContent = '';

        // Gets newest version of game-board
        const board = game.getBoard();
        
    }

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

// factory function to create both players

function reloadPage () {
    location.reload();
}

window.onload = (event) => {
    computerDiffEasy();
    playerSelectedXxxxx();
}