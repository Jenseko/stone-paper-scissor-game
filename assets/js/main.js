// --- Variables ---

const displayRounds = document.querySelector(".roundbox");
const form = document.querySelector(".form");
const mainScore = document.querySelector("#mainscore");
const changeText = document.querySelector("#output_text");
const restartLink = document.querySelector(".restart");
const radioBtns = document.querySelectorAll('input[type="radio"]');
const radioLabels = document.querySelectorAll("label");

let playedRounds = 0;
let pointsMe = 0;
let pointsCom = 0;

// --- Main Function ---

const letsPlay = (userChoice) => {
  // ---

  radioBtns.forEach((radio) => {
    radio.style.display = "none";
  });
  radioLabels.forEach((label) => {
    label.style.display = "none";
  });

  // ---

  if (form.style.display !== "none") {
    let rounDs = document.querySelector('input[name="round"]:checked').value;

    if (playedRounds < rounDs) {
      playedRounds++;

      document.querySelector(
        ".rounds_played"
      ).textContent = `${playedRounds} / ${rounDs}`;

      const commandS = ["Rock", "Paper", "Scissor"];
      let comsChoice = commandS[Math.floor(Math.random() * 3)];

      let resultText;

      if (userChoice === comsChoice) {
        resultText = "It's a Draw !";
        changeText.innerHTML = `You both choose ${userChoice} <br><br> ${resultText}`;
      } else if (
        (userChoice === "Rock" && comsChoice === "Scissor") ||
        (userChoice === "Paper" && comsChoice === "Rock") ||
        (userChoice === "Scissor" && comsChoice === "Paper")
      ) {
        resultText = "You Win !";
        pointsMe++;
        changeText.innerHTML = `${userChoice} (YOU) beats ${comsChoice} (Com) <br><br> ${resultText}`;
      } else {
        resultText = "You Lose !";
        pointsCom++;
        changeText.innerHTML = `${comsChoice} (Com) beats ${userChoice} (YOU) <br><br> ${resultText}`;
      }

      // Update score text
      mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;

      // Check game result
      if (playedRounds == rounDs) {
        if (pointsMe > pointsCom) {
          changeText.innerHTML = "You Won The Match!";
        } else if (pointsMe < pointsCom) {
          changeText.innerHTML = "You Lost The Match !";
        } else {
          changeText.innerHTML = "It's A Quitgame !";
        }
      }
    }
  }
};
