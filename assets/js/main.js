const displayRounds = document.querySelector(".roundbox");
const form = document.querySelector(".form");
const mainScore = document.querySelector("#mainscore");
const changeText = document.querySelector("#output_text");

let playedRounds = 0;
let pointsMe = 0;
let pointsCom = 0;

mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;

const letsPlay = (userChoice) => {
  let rounDs = document.querySelector('input[name="round"]:checked');

  if (!rounDs) {
    return;
  }

  rounDs = rounDs.value;

  form.style.display = "none";

  if (playedRounds < rounDs) {
    playedRounds++;
    displayRounds.innerHTML = `${playedRounds} / ${rounDs}`;

    const commandS = ["Stone", "Paper", "Scissor"];
    let comsChoice = commandS[Math.floor(Math.random() * 3)];

    let resultText;

    if (userChoice === comsChoice) {
      resultText = "It's a Draw !";
      changeText.innerHTML = `You both choose ${userChoice} <br><br> ${resultText}`;
    } else if (
      (userChoice === "Stone" && comsChoice === "Scissor") ||
      (userChoice === "Paper" && comsChoice === "Stone") ||
      (userChoice === "Scissor" && comsChoice === "Paper")
    ) {
      resultText = "You win !";
      pointsMe++;
      changeText.innerHTML = `${userChoice} (YOU) beats ${comsChoice} (Com) <br><br> ${resultText}`;
    } else {
      resultText = "You lose !";
      pointsCom++;
      changeText.innerHTML = `${comsChoice} (Com) beats ${userChoice} (YOU) <br><br> ${resultText}`;
    }

    // Update score text
    mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;

    // Check game result
    if (playedRounds == rounDs) {
      if (pointsMe > pointsCom) {
        changeText.innerHTML = "You Win !";
      } else if (pointsMe < pointsCom) {
        changeText.innerHTML = "You Lose !";
      } else {
        changeText.innerHTML = "It's a Quitgame !";
      }
    }
  }
};
