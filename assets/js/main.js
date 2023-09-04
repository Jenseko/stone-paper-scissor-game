const displayRounds = document.querySelector(".roundbox");
const mainScore = document.querySelector("#mainscore");
const changeText = document.querySelector("#output_text");

let playedRounds = 0;
let pointsMe = 0;
let pointsCom = 0;

mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;

// const restartGame = () => {
//   playedRounds = 0;
//   pointsMe = 0;
//   pointsCom = 0;
//   mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;
//   changeText.innerHTML = "let's play";
//   displayRounds.innerHTML = `${playedRounds} / ${rounDs}`;
// };

const letsPlay = (userChoice) => {
  let rounDs = document.querySelector('input[name="round"]:checked').value;

  if (playedRounds < rounDs) {
    playedRounds++;

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
  form.style.display = "none";
  displayRounds.innerHTML = `${playedRounds} / ${rounDs}`;
};
