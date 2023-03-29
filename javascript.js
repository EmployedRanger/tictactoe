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

let playerIcon = '';
let computerIcon = '';
let playerIconArray = '';

function playerSelectedXxxxx () {
    RemoveSelectedIconClass();
    const selectedPlayerIcon = document.querySelector('.x-selection');
    selectedPlayerIcon.classList.add('selected');
    const computerIconInsert = document.querySelector('.computer.board-segment');
    computerIconInsert.innerHTML = 'O';
    computerIconInsert.classList.remove('x-color');
    computerIconInsert.classList.add('o-color');

    const humanIconInsert = document.querySelector('.human.board-segment');
    humanIconInsert.innerHTML = 'X';
    humanIconInsert.classList.remove('o-color');
    humanIconInsert.classList.add('x-color');
    playerIcon = 'X';
    computerIcon = 'O';
    
    playerIconArray = [playerIcon, computerIcon];
    return playerIconArray;

}

function playerSelectedOoooo () {
    RemoveSelectedIconClass();
    const selectedPlayerIcon = document.querySelector('.o-selection');
    selectedPlayerIcon.classList.add('selected');
    const computerIconInsert = document.querySelector('.computer.board-segment');
    computerIconInsert.innerHTML = 'X';
    computerIconInsert.classList.remove('o-color');
    computerIconInsert.classList.add('x-color');

    const humanIconInsert = document.querySelector('.human.board-segment');
    humanIconInsert.innerHTML = 'O';
    humanIconInsert.classList.remove('x-color');
    humanIconInsert.classList.add('o-color');

    playerIcon = 'O';
    computerIcon = 'X';
    playerIconArray = [playerIcon, computerIcon];
    return playerIconArray;

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
    // ScreenController(playerIcon, computerIcon);
    GetBoardElements(playerIconArray);
}

let currentPlayerIndex = 0;

function GetBoardElements(playerIconArray) {
    // const one = document.querySelector('.one');
    // const two = document.querySelector('.two');
    // const three = document.querySelector('.three');
    // const four = document.querySelector('.four');
    // const five = document.querySelector('.five');
    // const six = document.querySelector('.six');
    // const seven = document.querySelector('.seven');
    // const eight = document.querySelector('.eight');
    // const nine = document.querySelector('.nine');
    const segmentPieces = document.getElementsByClassName('board-segment');
    const boardNineSquares = Array.prototype.slice.call(segmentPieces, 13, 22);
    // const boardNineSquares = document.getElementsByClassName('part');
    const board = [];
    
    boardNineSquares.forEach((square, index) => {
        square.classList.add('part');
        // console.log(square.className);
        square.addEventListener('click', () => {
            const currentPlayerIcon = playerIconArray[currentPlayerIndex]; 
            if (board[index] === '') {
                square.innerHTML = currentPlayerIcon;
                board[index] = currentPlayerIcon;
                if(currentPlayerIcon === 'X') {
                    square.classList.add('x-color');
                } else {
                    square.classList.add('o-color');
                }
                // console.log(currentPlayerIcon);
                // console.log(board);
                currentPlayerIndex = (currentPlayerIndex + 1) % playerIconArray.length;
                // computerTurn(playerIconArray, currentPlayerIcon, board);
                playGame(board, currentPlayerIcon);
            }
            // return currentPlayerIcon();
        });
        board.push('');
    });    
    // playGame(currentPlayerIcon);
}

function playGame(board, currentPlayerIcon) {
    const turnCounter = 0;

}

function computerTurn (playerIconArray, currentPlayerIcon, board) {
    // const emptyBoxes = document.getElementsByClassName
    const emptySquares = Array.from(document.getElementsByClassName('part'));
    // const emptySquares = Array.prototype.slice.call(allBoardSegments, 13, 22);
    console.log(emptySquares);

    if(emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const randomSquare = emptySquares[randomIndex];
        const computerIcon = playerIconArray.filter(icon => icon !== currentPlayerIcon[0]);
        randomSquare.innerHTML = computerIcon;
        randomSquare.classList.add(computerIcon === 'X' ? 'x-color' : 'o-color');
        board[parseInt(randomSquare.dateset.index)] = computerIcon;
        console.log(board);
        currentPlayerIndex = (currentPlayerIndex + 1) % playerIconArray.length;
    }
}

function easyDifficulty (board, turnCounter) {
    const computerChoice = turnCounter;
    if (board[computerChoice] === '') {
        board[computerChoice].innerHTML = computerIcon;
    }
    
    turnCounter++;
    console.log('turn:', turnCounter);
    return computerChoice;
}

function mediumDifficulty () {
    if (currentPlayerIcon === 'X') {
        console.log(board)
        const randomIndex = Math.floor(Math.random() * 9);
        console.log('randomIndex is', randomIndex);
        const randomSquare = board[randomIndex];
        console.log('randomSquare is: ', randomSquare);
        const computerIcon = 'O';

        if (randomSquare === '') {
            board[randomIndex].innerHTML = computerIcon;
            console.log('success')
        } else {
            playGame()
        }
    } 
}






// const Player = (name, icon) => {
//     const getName = () => name;
//     const getIcon = () => icon;

//     return {
//         getName,
//         getIcon
//     };
// }

// function Gameboard () {
//     const rows = 3;
//     const columns = 3;
//     const board = [];

//     for (let i = 0; i < rows; i++) {
//         board[i] = [];
//         for(let j = 0; j < columns; j++) {
//             board[i].push(BoardSegment());
//         }
//     }

//     const getBoard = () => board;

//     const selectSquare = (column, player) => {
//         const availableSegments = board.filter((row) => 
//         row[column].getValue() === '').map(row => row[column]);

//         if (!availableSegments.length) return;

//         // More stuff here
//     };

//     const printBoard = () => {
//         const boardWithSegmentValues = board.map((row) => 
//         row.map((segment) => segment.getValue()));
//         console.log(boardWithSegmentValues);
//     };

//     return { getBoard, selectSquare, printBoard };
// }

// function BoardSegment() {
//     let value = '';

//     const addIcon = (player) => {
//         value = player;
//     };

//     const getValue = () => value;

//     return {
//         addIcon,
//         getValue
//     };
// }

// function GameController(
//     playerIcon,
//     computerIcon,
//     humanPlayerName = 'Player',
//     computerPlayerName = 'Computer'
// ) {
//     const humanPlayer = Player(humanPlayerName, playerIcon);
//     console.log('human player is: ', humanPlayer.getIcon);
//     const computerPlayer = Player(computerPlayerName, computerIcon);
//     const board = Gameboard();
//     return {
//         humanPlayer,
//         computerPlayer,
//         board
//     };
// }

// function ScreenController(playerIcon, computerIcon) {
//     const game = GameController(playerIcon, computerIcon);
//     const boardDiv = document.querySelector('.game-board');
    
//     RenderBoard(boardDiv, game.board.getBoard());

//     const updateScreen = () => {
//         // clears all board segments
//         boardDiv.textContent = '';

//         // Gets newest version of game-board
//         const board = game.getBoard();

//         const BoardSegments = boardDiv.querySelectorAll('.board-segment');
//         BoardSegments.forEach((segment, index) => {
//             const row = Math.floor(index / 3);
//             const column = index % 3;
//             const value = board[row][column].getValue();
//             segment.textContent = value;
//         });
//     }    
// }

// function RenderBoard(boardDiv, gameBoard) {
//     // const boardDiv = document.querySelector('.game-board');

//     for(let i = 0; i < 3; i++) {
//         const rowDiv = document.createElement('div');
//         rowDiv.classList.add('row');
//         for(let j = 0; j < 3; j++) {
//             const segmentDiv = document.createElement('div');
//             segmentDiv.classList.add('board-segment');
//             segmentDiv.setAttribute('data-row', i);
//             segmentDiv.setAttribute('data-column', j);
//             rowDiv.appendChild(segmentDiv);
//         }
//         boardDiv.appendChild(rowDiv);
//     }
//     console.log(boardDiv)
// }

// function checkWinningCases () {
//     // Checks to see if there are any winning cases
//         // Switch cases to identify win cases
    
// }

// factory function to create both players

function reloadPage () {
    location.reload();
}

window.onload = (event) => {
    computerDiffEasy();
    playerSelectedXxxxx();
}