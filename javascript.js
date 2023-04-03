let difficultySetting = 1;
let playerIcon = '';
let computerIcon = '';
let playerIconArray = '';
const playGamePage = document.querySelector('.play-game-page');
const popUp = document.querySelector('.pop-up');

function applyEvents() {
    const board = [];
    const playAgain = document.querySelector('.try-again');
    const easy = document.querySelector('.easy');
    const medium = document.querySelector('.medium');
    const hard = document.querySelector('.hard');
    const impossible = document.querySelector('.impossible');
    const xSelection = document.querySelector('.x-selection');
    const oSelection = document.querySelector('.o-selection');
    const beginGame = document.querySelector('.begin-game');
    const mainMenu = document.querySelector('.main-menu');

    easy.addEventListener('click', () => {
        computerDiffEasy();
    });

    medium.addEventListener('click', () => {
        computerDiffMedium();
    });

    hard.addEventListener('click', () => {
        computerDiffHard();
    });

    impossible.addEventListener('click', () => {
        computerDiffImpossible();
    });

    xSelection.addEventListener('click', () => {
        playerSelectedXxxxx();
    });

    oSelection.addEventListener('click', () => {
        playerSelectedOoooo();
    });

    beginGame.addEventListener('click', () => {
        PageSwitch();
    });

    mainMenu.addEventListener('click', () => {
        reloadPage();
    });

    playAgain.addEventListener('click', () => {
        console.log('board during event', board)
        reloadPage();
        // newGame(board, humanPlayer, computerPlayer, difficultySetting);
    });

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
        
        return [
            playerIcon,
            computerIcon
        ]
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
        return [
            playerIcon,
            computerIcon
        ]
    }
    
    function PageSwitch () {
        const mainMenu = document.querySelector('.first-page');
        const gamePage = document.getElementsByClassName('play-game-page');
        mainMenu.style.display = 'none';
        gamePage[1].style.display = 'grid';
    
        pregameSetup(playerIcon, computerIcon, difficultySetting);        
    }

    playerSelectedXxxxx();

    function nextRound(board, humanPlayer, computerPlayer, difficultySetting) {
        gamePlay(board, humanPlayer, computerPlayer, difficultySetting);    
    }
    
    function pregameSetup(playerIcon, computerIcon, difficultySetting) {
        const humanPlayer = Player('Player', playerIcon);
        const computerPlayer = Player('Computer', computerIcon);

        getBoardElements(board, humanPlayer, computerPlayer);
        gamePlay(board, humanPlayer, computerPlayer, difficultySetting);
        return [
            humanPlayer,
            computerPlayer
        ]
    }
    
    function gamePlay(board, humanPlayer, computerPlayer, difficultySetting) {
        if (computerPlayer.icon === 'X') {
            computerTurn(board, difficultySetting, computerPlayer);
        }
    }
    
    function newGame(board, humanPlayer, computerPlayer, difficultySetting) {
        console.log('newGame board is: ', board);
    
        clearBoard(board);
        nextRound(board, humanPlayer, computerPlayer, difficultySetting);
    }
    
    function clearBoard(board) {
        console.log('board is: ', board);
        const allSquares = Array.from(document.querySelector('.part'));
        allSquares.forEach(element => {
            element.innerHTML = '';
        });
        for (let i = 0; i < 9; i++) {
            board[i] = '';
        }
        console.log(board);
    }
    
    function getBoardElements(board, humanPlayer, computerPlayer) {
        const segmentPieces = document.getElementsByClassName('board-segment');
        const boardNineSquares = Array.prototype.slice.call(segmentPieces, 13, 22);
        
        boardNineSquares.forEach((square, index) => {
            square.classList.add('part');
            square.addEventListener('click', () => {
                playerTurn(board, square, humanPlayer, computerPlayer);
            });
            board.push('');
        });   
        return board;
    }
    
    function playerTurn(board, square, humanPlayer, computerPlayer) {
        const squareIndex = square.id - 1;
        if (square.innerHTML === '') {
            if(humanPlayer.icon === 'X') {
                board[squareIndex] = 'X';
                square.classList.add('x-color');
                square.innerHTML = 'X';
            } else {
                board[squareIndex] = 'O';
                square.classList.add('o-color');
                square.innerHTML = 'O';
            }
            const result = checkWinningCases(board, humanPlayer);
            if (!result) {
                computerTurn(board, difficultySetting, computerPlayer);
            }
            // update(board);
        } else {
            console.log('square was not blank');
            console.log(board);
            return;
        }
        return board;
    }
    
    function checkWinningCases(board, player) {
        const winnerMessage = document.querySelector('.winner.is');
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (player.icon === board[a] && board[a] === board[b] && board[b] === board[c]) {
                winnerMessage.innerHTML = player.name;
                showMenu(board);
                return true;
            }
            // return
        }
        // function checkTie() {
        //     for (let i = 0; i < board.length; i++) {
        //         if(!board[i] === '') {
        //             checkTie();
        //         } else {
        //             winnerMessage.innerHTML = "It's a tie!";
        //             showMenu(board);    
        //         }
        //     }
        // }
        // checkTie();
    }
    
    function resetGame() {
        for (let i = 0; i < 9; i++) {
            board[i] = '';
            document.getElementById(i).innerHTML = '';
        }
    }

    function computerTurn(board, difficultySetting, computerPlayer) {
        console.log('difficulty setting:', difficultySetting)
        if (difficultySetting === 1) {
            easyDifficulty(board, computerPlayer);
        } else if(difficultySetting === 2) {
            mediumDifficulty(board, computerPlayer);
        } else if(difficultySetting === 3) {
            hardDifficulty(board, computerPlayer)
        } else if(difficultySetting === 4) {
            minimax(board, computerPlayer);
        }
        console.log(board)
        checkWinningCases(board, computerPlayer);
    }
    
    function easyDifficulty (board, computerPlayer) {
        console.log('easy ran')
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = computerPlayer.icon;
                const square = document.getElementsByClassName('board-segment')[i + 13];
                setTimeout(() => {
                    square.innerHTML = computerPlayer.icon;
                    square.classList.add(computerPlayer.icon === 'X' ? 'x-color' : 'o-color');
                }, 100);
                return board;
            }
        }
        return board;
    }
    
    function mediumDifficulty(board, computerPlayer) {
        let index = Math.floor(Math.random() * 9);
        console.log('index is:', index);
        console.log('boardIndex:', board[index])
        if (board[index] === '') { 
            selectedSquare = document.getElementById(index + 1);
            board[index] = computerPlayer.icon;
            setTimeout(() => {
                selectedSquare.innerHTML = computerPlayer.icon;
                selectedSquare.classList.add(computerPlayer.icon === 'X' ? 'x-color' : 'o-color');
            }, 100);
        } else {
          mediumDifficulty(board, computerPlayer);
        }
    }

    function computerDiffHard() {
        return;
    }

    function emptySquares(board) {
        const emptyAvilSquares = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                emptyAvilSquares.push(i);
            }            
        }
        return emptyAvilSquares;
    }

    function minimax(board, player) {
        console.log('minimax was called')
        let availSpots = emptySquares(board);
    
        if (checkWinningCases(board, player)) {
            return { score: -10 };
        } else if (checkWinningCases(board, player)) {
            return { score: 10 };
        } else if (availSpots.length === 0) {
            return { score: 0 };
        }
        let moves = [];
        for (let i = 0; i < availSpots.length; i++) {
            let move = {};
            move.index = board[availSpots[i]];
            board[availSpots[i]] = player;
    
            if (player == player) {
                let result = minimax(board, player);
                move.score = result.score;
            } else {
                let result = minimax(board, player);
                move.score = result.score;
            }
    
            board[availSpots[i]] = move.index;
    
            moves.push(move);
        }
    
        let bestMove;
        if (player === player) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
    
        return moves[bestMove];
    }
   
    const Player = (name, icon) => {
        return {
            name,
            icon
        };
    }

    function showMenu(board) {
        popUp.style.display = 'block';
        playGamePage.style.filter = 'blur(2px)';
        const segmentPieces = document.getElementsByClassName('board-segment');
        const boardNineSquares = Array.prototype.slice.call(segmentPieces, 13);
        
        boardNineSquares.forEach((square, index) => {
            square.removeEventListener('click', () => {
                console.log('removeEventListener')
                playerTurn(board, square, humanPlayer, computerPlayer);
            });
        });   
        return board;
    }
}


function removeSelectedClass () {
    const allSelectionOptions = document.querySelectorAll('.selection.option');
    for (i = 0; i < allSelectionOptions.length; i++) {
        if (allSelectionOptions[i].classList.contains('selected')) {
            allSelectionOptions[i].classList.remove('selected');
        }       
    }
}

function RemoveSelectedIconClass () {
    const iconSelectionOptions = document.querySelectorAll('.icon.selection');
    for (i = 0; i < iconSelectionOptions.length; i++) {
        if (iconSelectionOptions[i].classList.contains('selected')) {
            iconSelectionOptions[i].classList.remove('selected');
        }
    }
}

function reloadPage () {
    location.reload();
}

window.onload = (event) => {
    applyEvents();
}