const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;

displayScore();

function displayScore() {
  homeScoreEl.textContent = homeScore;
  awayScoreEl.textContent = awayScore;
}

function score2home() {
  homeScore += 2;
  displayScore();
}

function score3home() {
  homeScore += 3;
  displayScore();
}

function score5home() {
  homeScore += 5;
  displayScore();
}

function score7home() {
  homeScore += 7;
  displayScore();
}
