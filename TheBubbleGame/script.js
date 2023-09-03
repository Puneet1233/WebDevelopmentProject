document.addEventListener("DOMContentLoaded", function () {
  var timer = 60;
  var RanHit = 0;
  var score = 0;

  function IncreaseScore() {
    score += 10;
    document.querySelector(".box-3").textContent = score;
  }

  function DecreaseScore() {
    score -= 10;
    if (score >= 0) {
      document.querySelector(".box-3").textContent = score;
    } else {
      score = 0;
      document.querySelector(".box-3").textContent = score;
    }
  }

  function RandomValue() {
    var run = Math.floor(Math.random() * 10 + 1);
    return run;
  }

  function makeBubble() {
    var createBubble = "";
    for (let i = 1; i <= 200; i++) {
      createBubble += `<div class="bubble bubbleClr">${RandomValue()}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = createBubble;
  }

  function RunTimer() {
    var timeInt = setInterval(() => {
      if (timer >= 0) {
        document.querySelector(".box-2").textContent = timer;
        timer--;
      } else {
        clearInterval(timeInt);
        document.querySelector(
          ".pbtm"
        ).innerHTML = `<div class = "Endpage"><h1>Game Over</h1><p>Your Score is :${score}</p><p>Created by - <strong>Puneet Ayam</strong></p></div>`;
      }
    }, 1000);
  }

  function getNewHit() {
    var hit = (document.querySelector(".box-1").textContent = RandomValue());
    RanHit = hit;
  }

  function checkHit() {
    document
      .querySelector(".pbtm")
      .addEventListener("click", function (details) {
        if (details.target.classList.contains("bubble")) {
          console.log(details.target.classList.contains("bubble"));
          if (RanHit === Number(details.target.textContent)) {
            IncreaseScore();
            makeBubble();
            getNewHit();
          } else {
            DecreaseScore();
            makeBubble();
            getNewHit();
          }
        }
      });
  }

  checkHit();
  makeBubble();
  getNewHit();
  RunTimer();
});
