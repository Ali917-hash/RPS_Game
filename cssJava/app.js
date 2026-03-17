let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");

const playGame = (userId) => {
    console.log("User Choice:", userId);
    //Generate computer choice
    const compChoices = ["rock", "paper", "scissor"];
    const compId = compChoices[Math.floor(Math.random() * 3)];
    console.log("computer Choice:", compId);

    //compare choices
    if (userId === compId) {
        msg.innerText = "Game Tied!";
        msg.style.backgroundColor = "gray";
        return;
    }

    let userWin = true;
    if (userId === "rock") {
        userWin = compId === "paper" ? false : true;
    } else if (userId === "paper") {
        userWin = compId === "scissors" ? false : true;
    } else {
        userWin = compId === "rock" ? false : true;
    }

    if (userWin) {
         userScore++;
         userScore_span.innerText = userScore;
         msg.innerText = `You Win! Your ${userId} beats ${compId}`;
         msg.style.backgroundColor = "green";

     } else {
         compScore++;
         compScore_span.innerText = compScore;
         msg.innerText = `You Lose! ${compId} beats your ${userId}`;
         msg.style.backgroundColor = "coral";
     }

    console.log("Scores =>  User:", userScore, "Comp:", compScore);

    // check for overall winner (first to 3)
    showWinner(userWin, userId, compId, overallWinnerDeclared);
};

    let overallWinnerDeclared = true;

    const showWinner = (userWin, userId, compId, overallWinnerDeclared) => {
     if (userScore >= 3 && compScore < 3) {
            overallWinnerDeclared = true;
            alert("Congratulations! You are the overall winner!");
            userScore = 0;
            compScore = 0;
     } else if (compScore >= 3 && userScore < 3) {
            overallWinnerDeclared = true;
            alert("Computer wins the game! Better luck next time.");
            userScore = 0;
            compScore = 0;
     }
    
 };

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userId = choice.id;
        playGame(userId);
    });
});

