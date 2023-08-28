document.addEventListener('DOMContentLoaded', () => {
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let maxScore = 0;
    let gameOver = false;
    let messageText = 'Stone? Scroll? Shears? Choose wisely brave warrior.';
    let validChoices = ["stone", "scroll", "shears"];

    const btns = document.querySelectorAll('#playerChoices button');
    const resultsBox = document.querySelector('#resultsBox');
    const scoreBox = document.querySelector('#scoreBox');
    const resetGameButton = document.querySelector('#newGameButton');

    function getComputerChoice() {
        let randomChoice = Math.floor(Math.random() * validChoices.length);
        return validChoices[randomChoice];
    }

    function playRound(playerSelection) {
    
        let playerRoundScore = 0;
        let computerRoundScore = 0;
        let responses;
        let resultTxt;
        let scoreTxt;
        
        computerSelection = getComputerChoice();

        if (playerSelection === computerSelection) {
            resultTxt = "It's a tie!";
            playerRoundScore = 0.5;
            computerRoundScore = 0.5;

            return [playerRoundScore, computerRoundScore, resultTxt];
        }
        if (playerSelection === "stone") {
            responses = ["You lose! Scroll beats stone!","You win! Stone beats shears!"];
            playerRoundScore = (computerSelection === "scroll") ? 0 : 1;
        } else if (playerSelection === "scroll") {
            responses = ["You lose! Shears beats scroll!","You win! Scroll beats stone!"];
            playerRoundScore = (computerSelection === "shears") ? 0 : 1;
        } else if (playerSelection === "shears") {
            responses = ["You lose! Stone beats shears!", "You win! Shears beats scroll!"];
            playerRoundScore = (computerSelection === "stone") ? 0 : 1;
        }
        
        computerRoundScore = (playerRoundScore > 0) ? 0 : 1;
        resultTxt = `${responses[playerRoundScore]}  |   Roundscore:  ${playerRoundScore}`;
        
        return [playerRoundScore, computerRoundScore, resultTxt];  
    }

    function updateScore(roundResults) {
        playerScore = playerScore + roundResults[0];
        computerScore = computerScore + roundResults[1];
        maxScore = Math.max(playerScore, computerScore);
    }

    function checkForEndOfGame (currentMaxScore, limit) {
        let msg = '';
        if (currentMaxScore >= limit) {
            
            if (playerScore > computerScore) {
                msg = "You won! You will rest peacefully in Valhalla.";
            } else if (playerScore < computerScore) {
                msg = "You lost! You're denied entry to Valhalla and will roam the nether realm forever discontent.";
            } else {
                msg = "It's a tie. Both warriors live to see another battle.";
            }
            // write code to disable buttons until reset button is clicked
            gameOver = true;

            btns.forEach((btn) => {
                btn.removeEventListener('click', () => {
                    newGame(btn); 
                });
                btn.disabled = true;
            });
        }
        return msg;
    }

    function updateText(endOfGameText, roundResults) {
        if (gameOver) {
            messageText = endOfGameText;
        } else {
            messageText = roundResults[2];
        }
        // update DOM element with message Text
        resultsBox.textContent = messageText;
        scoreBox.textContent = `Your score: ${playerScore}  |  Opponent score: ${computerScore}`;
    }

    function resetGame() {
        window.location.reload();
    }

    function newGame(btn) {
        const roundResults =  playRound(btn.id);
        updateScore(roundResults);
        const endOfGameText = checkForEndOfGame(maxScore, 5);
        updateText(endOfGameText, roundResults);

    }

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            newGame(btn);
        });
    });
    resultsBox.textContent = messageText;
    resetGameButton.addEventListener('click', resetGame);

});




