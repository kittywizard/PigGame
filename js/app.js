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

//now to display each dice roll on screen!
var $setCurrentRoll = $(".currentRoll");


//make a variable for the end round button
var endRoundButton = document.getElementById("saveScore");

//BUG this button will continue to add roundScore points !! fix pls

//the dice rolling function
function rollDice() {
  //generate a random number between 1 and 6
  //TODO delete these extra logs
  //console.log("roundScore is currently: " + roundScore);

  var result = Math.floor(Math.random() * 6) + 1;
  //$setCurrentRoll.html(result);
  console.log("Result: " + result);

  switch  (result) {
    case 1:
      $setCurrentRoll.html("<img src='./dice/dice_1.svg' class='svg'>");
      break;

    case 2:
      $setCurrentRoll.html("<img src='./dice/dice_2.svg'  class='svg'>");
      break;

    case 3:
      $setCurrentRoll.html("<img src='./dice/dice_3.svg'  class='svg'>");
      break;

    case 4:
      $setCurrentRoll.html("<img src='./dice/dice_4.svg'  class='svg'>");
      break;

    case 5:
      $setCurrentRoll.html("<img src='./dice/dice_5.svg'  class='svg'>");
      break;

    case 6:
      $setCurrentRoll.html("<img src='./dice/dice_6.svg'  class='svg'>");
      break;

  }

  //check the results
  if (result === 1) {
    roundScore = 0;
    result = 0;
    //log
    console.log("Result was: " + result + ",  round over.");

    //call endRound
    endRound(roundScore);
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
    return roundScore;
  }
}

function endRound(roundScore) {
  //add roundScore to the activePlayer's score. in theory it should just add zero if there was a 1 rolled..
  scores[activePlayer] += roundScore;

  if (activePlayer == 0) {

    $setp1Score.html(scores[activePlayer]);
    $setp1roundScore.html(0);

  } else if (activePlayer == 1) {
    $setp2Score.html(scores[activePlayer]);
    $setp2roundScore.html(0);
  }
  if(scores[activePlayer] >= 100) {
    console.log("Congrats to Player " + activePlayer + " for winning the game with a total of " + scores[activePlayer]);
  }
  playerSwitch(roundScore);
  //TODO fix endRound so you can't keep getting more points
}

//playerSwitch seems to be working
function playerSwitch() {
  //IT WORKS DONT DELETE THE ROUNDSCORE VAR BELOW???
  roundScore = 0;
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
