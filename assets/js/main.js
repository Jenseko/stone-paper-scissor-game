const displayRounds = document.querySelector(".roundbox");
const mainScore = document.querySelector("#mainscore");
const changeText = document.querySelector("#output_text");

let playedRounds = 0;
let pointsMe = 0;
let pointsCom = 0;

mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;

const letsPlay = (userChoice) => {
  let rounDs = document.querySelector('input[name="round"]:checked').value;

  if (playedRounds < rounDs) {
    playedRounds++;

    const commandS = ["stone", "paper", "scissor"];
    let comsChoice = commandS[Math.floor(Math.random() * 3)];

    let resultText;

    if (userChoice === comsChoice) {
      resultText = "Draw!";
    } else if (
      (userChoice === "stone" && comsChoice === "scissor") ||
      (userChoice === "paper" && comsChoice === "stone") ||
      (userChoice === "scissor" && comsChoice === "paper")
    ) {
      resultText = "You Win!";
      pointsMe++;
    } else {
      resultText = "You Lose!";
      pointsCom++;
    }

    // Update score text
    mainScore.innerHTML = `${pointsMe} : ${pointsCom} (com) ${resultText}`;
    changeText.innerHTML = `${userChoice} (YOU) ${comsChoice} (COM) ${resultText}`;

    // Check game result
    if (playedRounds == rounDs) {
      if (pointsMe > pointsCom) {
        changeText.innerHTML = "You Win!";
      } else if (pointsMe < pointsCom) {
        changeText.innerHTML = "You Lose!";
      } else {
        changeText.innerHTML = "It's a Quitgame!";
      }
    }
  }
  displayRounds.innerHTML = `${playedRounds} / ${rounDs}`;
};
