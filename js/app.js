/*
courtesy of codingheroes.io
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//listen for a click on the submit button to start function
var getClick = document.getElementById('rollAgain');
rollAgain.addEventListener('click', rollDice, false);

//set all scores to 0 to start
var roundScore, player1, player2 = 0;
var currentPlayer = true; /* boolean; player 1 = true and player 2 = false */

//the dice rolling function
function rollDice(){
  //generate a random number between 1 and 6
  var result = Math.floor(Math.random() * 6) + 1;
  console.log(result);

  //check the results
  if(result === 1) {
    roundScore = 0;
    console.log(roundScore + " oh noes");
    return roundScore;
  }
  else {
    roundScore += result;
    console.log(roundScore);
    //players will switch here, call a new function?
    //switchPlayer();
    return roundScore;
    //does this return stay if i call a function?
  }
}

function switchPlayer() {
  //will be called by rollDice and also by a button click
 if (currentPlayer == true){
   currentPlayer = false;
   return currentPlayer;
 }
  else {
   currentPlayer = true;
   return currentPlayer;
  }
  
}
