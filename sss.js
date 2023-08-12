
function getComputerChoice() {
    let choices = ["Stone", "Scroll", "Shears"];
    let randomChoice = Math.floor(Math.random() * choices.length);
  
    return choices[randomChoice];
}

function playRound (playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();


