let playCount = 0;
let computerWinCount = 0;
let playerWinCount = 0;
let drawCount = 0;
const numberOfRounds = 5;



function playGame() {

   //loop numberOfRounds; 
   while(playCount<=numberOfRounds){

   let value = prompt("enter your selection").toLowerCase();


   if(value == "rock" || value == "paper" || value == "scissors"){

   // increment after every successful play; 
   playCount++;

   const computerPick = computerPlay();
   const playerPick = value;

   const winner = pickWinner(computerPick, playerPick);

   if (winner === 0) {
       drawCount++; 
       alert("Round:" + playCount + " Draw"+" \nProgram pick: "+computerPick+" \nPlayer pick: "+playerPick)
       }
   if (winner === 1) {
        computerWinCount++;
        alert("Round:" + playCount + " you lose"+" \nProgram pick: "+computerPick+" \nPlayer pick: "+playerPick)
        }
   if (winner === 2) {
        playerWinCount++;
        alert("Round:" + playCount + " you worn"+" \nProgram pick: "+computerPick+" \nPlayer pick: "+playerPick)
        }

   }else{

    alert("please enter rock, paper or scissors");

   }
    
    printFinalWinner();

   }
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


function printFinalWinner(){
    // compare total counts off each player print out winner;

   if(playCount===numberOfRounds){
      
    if (computerWinCount === playerWinCount)  {

        alert("it,s a draw no winner ");

    } else if (computerWinCount > playerWinCount) {

        alert("lost");

    } else if(computerWinCount < playerWinCount){

        alert("worn");

    }
   }
} 


