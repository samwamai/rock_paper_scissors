let playCount = 0;
let computerWinCount = 0;
let playerWinCount = 0;
let drawCount = 0;
const numberOfRounds = 5;



const buttons = document.querySelectorAll('button');

   buttons.forEach((button)=>{
       button.addEventListener("click",()=>{
           
           const parentnode = button.parentNode;
           parentnode.classList.add('animate-button');

           parentnode.addEventListener("animationend",(button)=>{
           parentnode.classList.remove('animate-button');   
    
           }, false);

           playGame(button.id);
       })
   })

const computerWins = document.getElementById('computer');
const draw = document.getElementById('draw');
const playerWins = document.getElementById('player');  
const rounds = document.getElementById('rounds'); 


function playGame(value) {

   if(value == "rock" || value == "paper" || value == "scissors"){

   if(playCount < numberOfRounds){
 
   // increment after every successful play; 
   playCount++;
   rounds.innerHTML=playCount;
   const computerPick = computerPlay();
   const playerPick = value;

   const winner = pickWinner(computerPick, playerPick);

   printEachRoundWinner(winner);

   
   }else {

    printFinalWinner();
    
    resetCounters();

   }   

   }
}
   
function resetCounters(){

playCount=0;
computerWinCount = 0;
playerWinCount = 0;
drawCount = 0;
    
computerWins.innerHTML="0";
draw.innerHTML="0";
playerWins.innerHTML="0"; 
rounds.innerHTML="0"; 

}

   function computerPlay() {
    // user Math.random() to pick random string from array return that value;
    const values = ["rock", "paper", "scissors"];
    const computerPick = values[Math.random() * values.length | 0];
    return computerPick;
}


function pickWinner(computerSection, playSelection) {

    // return 0 if draw, 1 if computer wins, 2 if play wins

    if (computerSection == "rock") {
        switch (playSelection) {
            case "rock":
                return 0;
                break;

            case "paper":
                return 2;
                break;

            case "scissors":
                return 1;
                break;
        }
    }
    if (computerSection == "paper") {
        switch (playSelection) {
            case "rock":
                return 1;
                break;

            case "paper":
                return 0;
                break;

            case "scissors":
                return 2;
                break;
        }
    }
    if (computerSection == "scissors") {
        switch (playSelection) {
            case "rock":
                return 2;
                break;

            case "paper":
                return 1;
                break;

            case "scissors":
                return 0;
                break;
        }
    }
    return 0;
}


function printEachRoundWinner(winner){

    if (winner === 0) {
        drawCount++; 
        draw.innerHTML=drawCount;
        animateScores(draw);
        }
    if (winner === 1) {
         computerWinCount++;
         computerWins.innerHTML=computerWinCount;
         animateScores(computerWins);
         }
    if (winner === 2) {
         playerWinCount++;
         playerWins.innerHTML=playerWinCount;
         animateScores(playerWins);
         }
 
}

function printFinalWinner(){
    // compare total counts off each player print out winner;
      
    if (computerWinCount === playerWinCount)  {
        animateWinner(draw);
        alert("Draw");

    } else if (computerWinCount > playerWinCount) {
        animateWinner(computerWins)
        alert("winner PC");

    } else if(computerWinCount < playerWinCount){
        animateWinner(playerWins)
        alert("winner PY");
    }
}

function animateScores(element){
const parentnode = element.parentNode;
parentnode.classList.add('animate-button');

parentnode.addEventListener("animationend",()=>{
parentnode.classList.remove('animate-button');   

}, false);

}
function animateWinner(element){
    const parentnode = element.parentNode;
    parentnode.classList.add('animate');
    
    parentnode.addEventListener("animationend",()=>{
    parentnode.classList.remove('animate');   
    }, false);   
}


