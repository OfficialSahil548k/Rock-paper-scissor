let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let dabba = document.querySelector(".box");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

let compchoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randomidx = Math.floor(Math.random() * 3);         // ther are some inbuilt classes in js.
    return options[randomidx];
};

let gamedraw = () => {
    console.log("game was draw.");
    message.innerText = "Game Draw!";
    dabba.style.backgroundColor = "gray";
};

const showWinner = (userwin) => {
    if (userwin) {
        user_score++;
        userscore.innerText=user_score;
        console.log("You Win!");
        message.innerText = "Congratulations You Win!";
        dabba.style.backgroundColor = "green";              // kyu ni ho rha change.
    } else {
        comp_score++;
        compscore.innerText=comp_score;
        console.log("computer won!");
        message.innerText = "You Lose!";
        dabba.style.backgroundColor = "red";                // kyu ni ho rha chnage.
    }
};

let playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const systemchoice = compchoice();
    console.log("comp choice = ", systemchoice);

    if (userchoice === systemchoice) {
        gamedraw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = systemchoice === "scissor" ? true : false;
        }
        else if (userchoice === "paper") {
            userwin = systemchoice === "scissor" ? false : true;
        }
        else {
            userwin = systemchoice === "rock" ? false : true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});