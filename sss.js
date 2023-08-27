let computerSelection;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomChoice];
}

function playRound(playerSelection) {
    let result;
    let roundScore = 0;
    let responses;
    
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
        roundScore = 0.5;
    }
    if (playerSelection === "stone") {
        responses = ["You lose! Scroll beats stone!","You win! Stone beats shears!"];
        roundScore = (computerSelection === "scroll") ? 0 : 1;
    } else if (playerSelection === "scroll") {
        responses = ["You lose! Shears beats scroll!","You win! Scroll beats stone!"];
        roundScore = (computerSelection === "shears") ? 0 : 1;
    } else if (playerSelection === "shears") {
        responses = ["You lose! Stone beats shears!", "You win! Shears beats scroll!"];
        roundScore = (computerSelection === "stone") ? 0 : 1;
    } 
    console.log(responses[roundScore] + " Roundscore: " + roundScore);
    return roundScore;

    
}

function game() {
    
    gameActive = true;
    let playerScore = 0;
    let computerScore = 0;
    
    let maxScore = max(playerScore, computerScore);

    console.log("Overall Score: " + overallScore + " / 5");

    // This needs to go into check for end of game function.
    // if (overallScore > 2.5) {
    //     console.log("You won! You will rest peacefully in Valhalla.");
    // } else if (overallScore < 2.5) {
    //     console.log("You lost! You're denied entry to Valhalla and will roam the nether realm forever discontent.")
    // }
    
    const btns = document.querySelectorAll('#playerChoices button');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            playRound(btn.id);
            // Update score
            // Check for end of game
        });
    });
}




