const rockButton= document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton= document.getElementById("scissor");
const restartButton=document.getElementById("restart");

const resultText = document.getElementById("result-text");
const playerPoints=document.getElementById("playerPoints");
const computerPoints=document.getElementById("computerPoints");
const option=document.getElementById("option");

let playerWinCount=0;
let computerWinCount=0;

function computerRandomChoice(){
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() *3);
    const result = computerOptions[index];
    return result
}

function hasPlayerWon(playerOption, computerOption){

    if(playerOption==="Rock" && computerOption==="Scissors"){
        return true;
    }else if(playerOption==="Paper" && computerOption==="Rock"){
        return true;
    }else if(playerOption==="Scissors" && computerOption==="Paper"){
        return true;
    }
}

function getResults(playerOption){

    const computer = computerRandomChoice();
    if(hasPlayerWon(playerOption, computer)){
        playerWinCount++;
        return `Player wins! ${playerOption} beats ${computer}`
    }else if(playerOption===computer){
        return `Its a tie! Both chose ${playerOption}`;
    }else{
        computerWinCount++;
        return `Computer wins! ${computer} beats ${playerOption}`;
    }
}

function displayResults(playerOption){
    resultText.innerText=getResults(playerOption);
    resultText.style.display="block";
    playerPoints.innerText=playerWinCount;
    computerPoints.innerText=computerWinCount;

    if(playerWinCount===3){
        option.style.display="none";
        rockButton.style.display="none";
        paperButton.style.display="none";
        scissorButton.style.display="none";
        resultText.innerText="Game Over. Player has won!";
        restartButton.style.display="inline-block";
        
    }else if(computerWinCount===3){
        option.style.display="none";
        rockButton.style.display="none";
        paperButton.style.display="none";
        scissorButton.style.display="none";
        resultText.innerText="Game Over. Computer has won!";
        restartButton.style.display="inline-block";
        
    }
}

function restart(){
    playerWinCount=0;
    computerWinCount=0;
    playerPoints.innerText=playerWinCount;
    computerPoints.innerText=computerWinCount;
    option.style.display="block";
    rockButton.style.display="";
    paperButton.style.display="";
    scissorButton.style.display="";
    restartButton.style.display="none";
    resultText.style.display="none";
}


rockButton.addEventListener("click", ()=>{
    displayResults("Rock");
});

paperButton.addEventListener("click", ()=>{
    displayResults("Paper");
})

scissorButton.addEventListener("click", ()=>{
    displayResults("Scissors");
})

restartButton.addEventListener("click", restart);