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
var scores = [0,0];
var activePlayer = 0;

//set all scores to 0 to start
var roundScore, player1, player2 = 0;

//set css variables
var $setp1Score = $(".p1Score");
var $setp1roundScore = $(".p1roundScore");

//make a variable for the end round button
//BUG
//var endRoundButton = document.getElementById("saveScore");

//BUG this button will continue to add roundScore points !! fix pls

//the dice rolling function
function rollDice(){
  //generate a random number between 1 and 6
  var result = Math.floor(Math.random() * 6) + 1;
  console.log("Result: " + result);
  console.log(roundScore);

  //check the results
  if(result === 1) {
    roundScore = 0;
    console.log(roundScore + " endRound will now run");
    endRound(roundScore);
  }

  else {
    roundScore += result;
    console.log( roundScore);
    console.log("Round Score: " + roundScore);
    // WHAT DID I DO BUG BUG BUG BUG
    $setp1roundScore.html(roundScore);


    //players will switch here, call a new function?
    //switchPlayer();

    return roundScore;
    //does this return stay if i call a function?
  }
}

function endRound(roundScore) {
  //need to account for which player's turn it is at some point
  //TODO switch Player
  scores[activePlayer] = scores[activePlayer] + roundScore;
  console.log(scores[activePlayer]);

  $setp1Score.html(scores[activePlayer]);
  roundScore = 0;

  //hide end round button for now when its been clicked

  /*if (saveScore.style.display === "block") {
    square.style.display = "none";
  } else {
    square.style.display = "block"
  }*/

  return roundScore;
    //TODO fix endRound so you can't keep getting more money
}

/*function playerSwitch() {
  //call this from endRound()
  //TODO switch
  if (activePlayer == 0){
    activePlayer = 1;
  }
  else {
    activePlayer = 0;
  }
}
*/
