const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 10;

displayScore();

function displayScore() {
  homeScoreEl.style.color = "#F94F6D";
  awayScoreEl.style.color = "#F94F6D";
  if (homeScore > awayScore) {
    homeScoreEl.style.color = "green";
  } else if (awayScore > homeScore) {
    awayScoreEl.style.color = "green";
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
