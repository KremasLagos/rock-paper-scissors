// variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceInd = Math.random() * 100
    let choice = null
    if (choiceInd >= 66.66)
    {
        choice = "rock"
    }
    else if (choiceInd >= 33.33)
    {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice
}
function getHumanChoice() {
    let choice = prompt()
    return choice
}
function playRound(humanchoice, computerchoice) {
  let winner = false;
  let resultString = "lose";
  humanchoice = humanchoice.toLowerCase();

  // Human choce rock
  if (humanchoice == "rock" && computerchoice == "scissors") {
    alert("You won! Rock beats Scissors!");
    humanScore++;
  } else if (humanchoice == "rock" && computerchoice == "paper") {
    alert("You lose! Paper beats Rock!");
    computerScore++;
  } else if (humanchoice == "rock") {
    alert("Tie!");
  }
  //Human chose paper
  if (humanchoice == "paper" && computerchoice == "rock") {
    alert("You won! Paper beats Rock!");
    humanScore++;
  } else if (humanchoice == "paper" && computerchoice == "scissors") {
    alert("You lose! Scissors beats Paper!");
    computerScore++;
  } else if (humanchoice == "paper") {
    alert("Tie!");
  }
  //Humnan chose scissors
  if (humanchoice == "scissors" && computerchoice == "paper") {
    alert("You won! Scissors beats Paper!");
    humanScore++;
  } else if (humanchoice == "scissors" && computerchoice == "rock") {
    alert("You lose! Rock beats Scissors!");
    computerScore++;
  } else if (humanchoice == "scissors") {
    alert("Tie!");
  }    
    
}
function playGame() {
    let ind = 0
    while (ind < 5) {
        const humanchoice = getHumanChoice();
        const computerchoice = getComputerChoice();
        playRound(humanchoice, computerchoice)
        ind++
    }
    alert("YourScore:" + humanScore)


}

playGame()