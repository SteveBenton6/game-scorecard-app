const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;

displayScore();

function displayScore() {
  homeScoreEl.style.color = "#F94F6D";
  awayScoreEl.style.color = "#F94F6D";
  if (homeScore > awayScore) {
    homeScoreEl.style.color = "green";
  } else if (awayScore > homeScore) {
    awayScoreEl.style.color = "green";
  } else if (awayScore === homeScore) {
    homeScoreEl.style.color = "orange";
    awayScoreEl.style.color = "orange";
  }
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

function score2away() {
  awayScore += 2;
  displayScore();
}

function score3away() {
  awayScore += 3;
  displayScore();
}

function score5away() {
  awayScore += 5;
  displayScore();
}

function score7away() {
  awayScore += 7;
  displayScore();
}

function finalWhistle() {
  homeScore = 0;
  awayScore = 0;
  displayScore();
}
