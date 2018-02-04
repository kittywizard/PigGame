/*
courtesy of codingheroes.io
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//TODO do i need these anymore?
//listen for a click on the submit button to start function
//var getClick = document.getElementById('rollAgain');
//rollAgain.addEventListener('click', rollDice, false);

//TODO do i need these either?
//listen for the end round click
//var stopRolling = document.getElementById('saveScore');
//saveScore.addEventListener('click', endRound, false);


//total scores array
var scores = [0, 0];

//activePlayer keeps track of Player 1 [0] and Player 2 [1]
//Player 1 goes first. ALWAYS
var activePlayer = 0;

//set roundScore to zero
var roundScore = 0;

//set css variables
var $setp1Score = $(".p1Score");
var $setp1roundScore = $(".p1roundScore");

var $setp2Score = $(".p2Score");
var $setp2roundScore = $(".p2roundScore");

//make a variable for the end round button
var endRoundButton = document.getElementById("saveScore");

  var result = Math.floor(Math.random() * 6) + 1;
  console.log("Result: " + result);

  //check the results
  if (result === 1) {
    roundScore = 0;
  } else {
    //add result to roundScore
    roundScore += result;
    console.log("Round Score: " + roundScore + " Current Player: " + activePlayer);
    //check which player is active and update their score
    if (activePlayer == 0) {
      $setp1roundScore.html(roundScore);
    } else if (activePlayer == 1) {
      $setp2roundScore.html(roundScore);
    }
  }


  scores[activePlayer] += roundScore;

  //console.log("roundScore has been reset: " + roundScore);
  //BUG this isn't being picked up

  if (activePlayer == 0) {

    $setp1Score.html(scores[activePlayer]);
    $setp1roundScore.html(0);

  } else if (activePlayer == 1) {
    $setp2Score.html(scores[activePlayer]);
    $setp2roundScore.html(0);
  }
  roundScore = 0;
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  console.log("Player is now: " + activePlayer);
  console.log("Player 1's score is: " + scores[0] + " and Player 2's score is: " + scores[1]);
