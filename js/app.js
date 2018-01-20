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
//var getClick = document.getElementById('rollAgain');
//rollAgain.addEventListener('click', rollDice, false);

//listen for the end round click
//var stopRolling = document.getElementById('saveScore');
//saveScore.addEventListener('click', endRound, false);


//total scores
var scores = [0, 0];
var activePlayer = 0;

//set all scores to 0 to start
var roundScore = 0;

//set css variables
var $setp1Score = $(".p1Score");
var $setp1roundScore = $(".p1roundScore");

var $setp2Score = $(".p2Score");
var $setp2roundScore = $(".p2roundScore");
//make a variable for the end round button
var endRoundButton = document.getElementById("saveScore");

//BUG this button will continue to add roundScore points !! fix pls

//the dice rolling function
function rollDice() {
  //generate a random number between 1 and 6
  var result = Math.floor(Math.random() * 6) + 1;
  console.log("Result: " + result);

  //check the results
  if (result === 1) {
    roundScore = 0;
    console.log(roundScore + " endRound will now run");
    endRound(roundScore);
  } else {
    roundScore += result;
    console.log("Round Score: " + roundScore);

    //check which player is active
    if (activePlayer == 0) {
      $setp1roundScore.html(roundScore);
    } else if (activePlayer == 1) {
      $setp2roundScore.html(roundScore);
    }
    
    //not needed?
    //return roundScore;
  }
}

function endRound(roundScore) {
  //check for when  a score hits 100
  if(scores[activePlayer] <= 100) {

  }
  //need to account for which player's turn it is at some point
  //TODO switch Player
  scores[activePlayer] = scores[activePlayer] + roundScore;
  console.log(scores[activePlayer]);
  if (activePlayer == 0) {

    $setp1Score.html(scores[activePlayer]);
    $setp1roundScore.html(0);

  } else if (activePlayer == 1) {
    $setp2Score.html(scores[activePlayer]);
    $setp2roundScore.html(0);
  }
  roundScore = 0;
  console.log(roundScore);

  playerSwitch();
  //TODO fix endRound so you can't keep getting more money
}

function playerSwitch() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  console.log("Player is now: " + activePlayer);
  console.log("Player 1's score is: " + scores[0] + " and Player 2's score is: " + scores[1]);

  //need to do the css editing maybe?

  return activePlayer;
}
