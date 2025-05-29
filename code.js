// variables
let humanScore = 0;
let computerScore = 0;
const message = document.querySelector(".message")

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
    return choice
}
function displayMessage(string) {
message.textContent = string
}
function playRound(humanchoice, computerchoice) {
  let winner = false;
  let resultString = "lose";
  // humanchoice = humanchoice.toLowerCase();

  // Human choce rock
  if (humanchoice == "rock" && computerchoice == "scissors") {
    displayMessage("You won! Rock beats Scissors!")
    humanScore++;
  } else if (humanchoice == "rock" && computerchoice == "paper") {
    displayMessage("You lose! Paper beats Rock!");
    computerScore++;
  } else if (humanchoice == "rock") {
    displayMessage("Tie!");
  }
  //Human chose paper
  if (humanchoice == "paper" && computerchoice == "rock") {
    displayMessage("You won! Paper beats Rock!");
    humanScore++;
  } else if (humanchoice == "paper" && computerchoice == "scissors") {
    displayMessage("You lose! Scissors beats Paper!");
    computerScore++;
  } else if (humanchoice == "paper") {
    displayMessage("Tie!");
  }
  //Humnan chose scissors
  if (humanchoice == "scissors" && computerchoice == "paper") {
    displayMessage("You won! Scissors beats Paper!");
    humanScore++;
  } else if (humanchoice == "scissors" && computerchoice == "rock") {
    displayMessage("You lose! Rock beats Scissors!");
    computerScore++;
  } else if (humanchoice == "scissors") {
    displayMessage("Tie!");
  }    
    
}
// function playGame() {
//   playRound(humanchoice, computerchoice);
//     // let ind = 0
//     // while (ind < 5) {
//     //     const humanchoice = getHumanChoice();
//     //     const computerchoice = getComputerChoice();
//     //     playRound(humanchoice, computerchoice)
//     //     ind++
//     // }
//     // alert("YourScore:" + humanScore)


// }

// EVENTS
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")


rock.addEventListener("click" , function() {
  playRound("rock" , "scissors")
})
paper.addEventListener("click" , function() {
  playRound("paper" , getComputerChoice())
})
scissors.addEventListener("click" , function() {
  playRound("scissors" , getComputerChoice())
})





