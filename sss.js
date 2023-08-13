
function getComputerChoice() {
    let choices = ["stone", "scroll", "shears"];
    let randomChoice = Math.floor(Math.random() * choices.length);
  
    return choices[randomChoice];
}

// Write input statement here to gather player selection rather than literal implementation
const playerSelection = "stone";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection === "stone") {
        return (computerSelection === "scroll") ? "You lose! Scroll beats stone!" : "You win! Stone beats shears!";
    } else if (playerSelection === "scroll") {
        return (computerSelection === "shears") ? "You lose! Shears beats scroll!" : "You win! Scroll beats stone!";
    } else if (playerSelection === "shears") {
        return (computerSelection === "stone") ? "You lose! Stone beats shears!" : "You win! Shears beats scroll!";
    }
}




const computerSelection = getComputerChoice();


