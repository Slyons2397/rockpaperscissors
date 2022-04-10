const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const newRound = document.getElementById('newRound');
const finalMessage = document.getElementById('finalMessage');
const yourChoice = document.getElementById('yourChoice');
const theirChoice = document.getElementById('theirChoice');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let winMessage = document.getElementById('winmessage');
let playerChoice = '?';
let computersChoice = '';

newRound.addEventListener('click', (e)=>{
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    winMessage.textContent = '';
    newRound.textContent = 'Rock Paper Scissors';
    finalMessage.textContent = '';
    yourChoice.textContent = '';
    theirChoice.textContent = '';
})
rockButton.addEventListener('click', (e)=>{
   playerChoice = 'rock'.toUpperCase();
   function computerChoice(){
    let theComputerChoice = Math.floor(Math.random() * 3)+1;
    if (theComputerChoice === 1){
        computersChoice = 'ROCK';
    }else if (theComputerChoice === 2){
        computersChoice = 'PAPER';
    }else if (theComputerChoice === 3){
        computersChoice = 'SCISSORS';
    }
}
    computerChoice();
    yourChoice.textContent = "You chose:" + " " + playerChoice;
    theirChoice.textContent = "The computer chose:" + " " + computersChoice;

    console.log(playerChoice);
    console.log(computersChoice);
    whoWins();
})



paperButton.addEventListener('click', (e)=>{
    playerChoice = 'paper'.toUpperCase();
    function computerChoice(){
        let theComputerChoice = Math.floor(Math.random() * 3)+1;
        if (theComputerChoice === 1){
            computersChoice = 'ROCK';
        }else if (theComputerChoice === 2){
            computersChoice = 'PAPER';
        }else if (theComputerChoice === 3){
            computersChoice = 'SCISSORS';
        }
    }
        computerChoice();
    
        yourChoice.textContent = "You chose:" + " " + playerChoice;
        theirChoice.textContent = "The computer chose:" + " " + computersChoice;
        console.log(playerChoice);
        console.log(computersChoice);
        whoWins();
})

scissorsButton.addEventListener('click', (e)=>{
    playerChoice = 'scissors'.toUpperCase();
    function computerChoice(){
        let theComputerChoice = Math.floor(Math.random() * 3)+1;
        if (theComputerChoice === 1){
            computersChoice = 'ROCK';
        }else if (theComputerChoice === 2){
            computersChoice = 'PAPER';
        }else if (theComputerChoice === 3){
            computersChoice = 'SCISSORS';
        }
    }
        computerChoice();
    
        yourChoice.textContent = "You chose:" + " " + playerChoice;
        theirChoice.textContent = "The computer chose:" + " " + computersChoice;
        console.log(playerChoice);
        console.log(computersChoice);
        whoWins();
})




function whoWins(){
    if (playerChoice === computersChoice){
        winMessage.textContent = ('TIE!');
    }else if (playerChoice === 'ROCK' && computersChoice === 'PAPER'){
        winMessage.textContent = ('YOU LOSE!');
    }else if (playerChoice === 'ROCK' && computersChoice ==='SCISSORS'){
        winMessage.textContent =('YOU WIN!')
    }else if (playerChoice === 'PAPER' && computersChoice === 'SCISSORS'){
        winMessage.textContent =('YOU LOSE!')
    }else if (playerChoice === 'PAPER' && computersChoice === 'ROCK'){
        winMessage.textContent = ('YOU WIN!');
    }else if (playerChoice === 'SCISSORS' && computersChoice === 'ROCK'){
        winMessage.textContent =('YOU LOSE!');
    }else if (playerChoice === 'SCISSORS' && computersChoice === 'PAPER'){
        winMessage.textContent = ('YOU WIN!');
    }

    let winner = winMessage.textContent;

    if (winner === 'YOU WIN!') {
        playerScore.textContent++;
    }else if (winner === 'YOU LOSE!'){
        computerScore.textContent++;
    }

    let finalPlayerScore = playerScore.textContent;
    let finalComputerScore = computerScore.textContent;


    if (finalPlayerScore == '5'){
        finalMessage.textContent = "YOU BEAT THE COMPUTER!";
        winMessage.textContent = 'NICE!';
        newRound.textContent = 'New Round?';
        yourChoice.textContent = '';
        theirChoice.textContent = '';

    }
    
    if (finalComputerScore == '5'){
        finalMessage.textContent = "YOU LOST TO THE COMPUTER!";
        winMessage.textContent = 'WHAT HAVE YOU DONE?!';
        newRound.textContent = 'New Round?';
        yourChoice.textContent = '';
        theirChoice.textContent = '';

    }
}
whoWins();

