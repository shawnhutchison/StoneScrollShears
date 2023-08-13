let validChoices = ["stone", "scroll", "shears"];
let playerSelection;
let computerSelection;
let playerSelectionUnconfirmed;


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * validChoices.length);
    return validChoices[randomChoice];
}

function playRound() {
    playerSelectionUnconfirmed = true;
    let result;
    let roundScore = 0;
    let responses;

    while (playerSelectionUnconfirmed) {
        playerSelection = prompt("CHOOSE: STONE || SCROLL || SHEARS: ");
        playerSelection = playerSelection.toLowerCase();

        if (validChoices.includes(playerSelection)) {
            playerSelectionUnconfirmed = false;
        } else {
            console.log("If you have any honor at all, you'll choose on of the valid options.")
        }
    }
    
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
    roundCounter = 0;
    gameActive = true;
    let overallScore = 0;

    while (gameActive) {
        overallScore = overallScore + playRound();
        
        roundCounter++;
        if (roundCounter > 4) {
            gameActive = false;
            console.log("Game over!");
        }
    }

    console.log("Overall Score: " + overallScore + " / 5");

    if (overallScore > 2.5) {
        console.log("You won! You will rest peacefully in Valhalla.");
    } else if (overallScore < 2.5) {
        console.log("You lost! You're denied entry to Valhalla and will roam the nether realm forever discontent.")
    }
}




