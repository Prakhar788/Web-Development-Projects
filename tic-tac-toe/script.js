/** Game state object which defines a a gameboard array and returns a function to change it. */
const gameState = (function() {
    let gameBoard = ['','','','','','','','','']

    const storeMarker= function(id, marker){
        gameBoard[id] = marker;
    }  

    const checkWinner = function(gamePlaying){
        let winner;
        if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
            gamePlaying = false;
            winner = gameBoard[0];
        } 
        else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
            gamePlaying = false;
            winner = gameBoard[0];
        } 
        else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
            gamePlaying = false;
            winner = gameBoard[0];
        } 
        else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
            gamePlaying = false;
            winner = gameBoard[1];
        }
        else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
            gamePlaying = false;
            winner = gameBoard[2]
        } 
        else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
            gamePlaying = false;
            winner = gameBoard[2]
        } 
        else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
            gamePlaying = false;
            winner = gameBoard[3]
        } 
        else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
            gamePlaying = false;
            winner = gameBoard[6]
        } 
        else if (!gameBoard.includes('')) {
            gamePlaying = false;
            winner = '';
        } 
        else {
            gamePlaying = true;
        }
        return {winner,gamePlaying};
    }

    const resetBoard = function() {
        for(let i=0; i<gameBoard.length; i++) {
            gameBoard[i] = '';
        }
        return gameBoard
    }


    return {
        gameBoard, storeMarker, checkWinner ,resetBoard
    }
})();

/** All elements associated with display board */
const displayController = (function(){
    let currentPlayer;
    
    const domElements = {
        cells: document.getElementsByClassName("cell"),
        board: document.getElementById("board"),
        newBtn: document.getElementById("new-game"),
        heading: document.getElementById("title"),
        modal: document.getElementById("modal-startgame"),
        startgame: document.getElementById("startgame-button"),
        p1input: document.getElementById("p1-input"),
        p2input: document.getElementById("p2-input"),
    }

    //Marker getter
    const getMarker = function(){
        return currentPlayer
    }

    //Change marker on turns
    const changePlayer = function(marker){
        if(marker == "X"){
            marker = "O"
        }
        else{
            marker = "X"
        }
        return marker
    }

    //Clear the board
    const clearBoard = function(){
        Array.from(domElements.cells).forEach((el) => el.textContent = "");
    }

    //const togglePlayer = function() {
    //    dom.notif.textContent === 'Player 1' ? (dom.notif.textContent = 'Player 2') : (dom.notif.textContent = 'Player 1');
    //}
    
    return {
        domElements,
        getMarker,
        changePlayer,
        clearBoard,
    }
})()

// Main function
const playGame = (function(gameState,displayControl){
    let namep1, namep2;
    let dom = displayControl.domElements;
    let board, marker, winner;
    let gamePlaying = true; 
    board = gameState.board;
    marker = "O"

    dom.board.addEventListener('click', function(e){
        if(gamePlaying){
            if(e.target.matches('.cell')){
                const cell = e.target;
                let board = gameState.gameBoard;
                const id = parseInt(e.target.id)

                if(board[id] == ""){
                    //Get marker
                    marker = displayControl.changePlayer(marker)

                    //STORE THE ELEMENT INSIDE THE GAMEBOARD ARRAY
                    gameState.storeMarker(id, marker)
                    //Fill the board
                    console.log(board)
                    cell.textContent = board[id];

                    //Check for a winner
                    gamePlaying = gameState.checkWinner(gamePlaying).gamePlaying;
                    winner = gameState.checkWinner(winner).winner;
                    console.log(winner)

                    if(!gamePlaying){
                        gameState.resetBoard(board);
                        if(winner == "X"){
                            dom.heading.textContent = `Congratulations ${namep1}! YOU WON!`
                        }
                        else{
                            dom.heading.textContent = `Congratulations ${namep2}! YOU WON!`
                        }
                    }
                }    
            }
        }
    });
    
    dom.newBtn.addEventListener('click', () => {
        gamePlaying = true;
        board = gameState.resetBoard();
        displayControl.clearBoard();
        marker = 'O';
        dom.heading.textContent = "TIC TAC TOE"
    });

    window.addEventListener('load', (e) => {
        gamePlaying = true;
        displayControl.clearBoard();
        dom.modal.style.display = "block";
    });

    dom.startgame.addEventListener('click',()=> {
        dom.modal.style.display = "none";
        namep1 = displayControl.domElements.p1input.value;
        namep2 = displayControl.domElements.p2input.value;
    })

})(gameState, displayController)


