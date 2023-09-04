const displayRounds = document.querySelector(".roundbox");
const form = document.querySelector(".form");
const mainScore = document.querySelector("#mainscore");
const changeText = document.querySelector("#output_text");
const restartLink = document.querySelector(".restart");

let playedRounds = 0;
let pointsMe = 0;
let pointsCom = 0;

mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;

const letsPlay = (userChoice) => {
  //   displayRounds.style.display = "none";

  if (form.style.display !== "none") {
    let rounDs = document.querySelector('input[name="round"]:checked').value;
    console.log(rounDs);

    if (playedRounds < rounDs) {
      playedRounds++;
      console.log(playedRounds);
      //   displayRounds.innerHTML = `${playedRounds} / ${rounDs}`;

      const commandS = ["Rock", "Paper", "Scissor"];
      let comsChoice = commandS[Math.floor(Math.random() * 3)];
      console.log(comsChoice);

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

      document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.disabled = true;
      });

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

// restartLink.addEventListener("click", () => {
//   playedRounds = 0;
//   pointsMe = 0;
//   pointsCom = 0;
//   mainScore.innerHTML = `${pointsMe} : ${pointsCom}`;
//   changeText.innerHTML = "Let's play";
//   form.style.display = "block";
//   displayRounds.innerHTML = "";
// });
