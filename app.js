let userScore = 0;
let botScore = 0;
let drawScore = 0;
const userScore_span = document.getElementById("user-score"); // to signify it's a span tag in html
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board"); // to signify it's a div in html
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userEmoji_span = document.getElementById("user-emoji");
const botEmoji_span = document.getElementById("bot-emoji");
const countdown_div = document.getElementById('countdown');

function getBotChoice() {
    const botChoice = ['r', 'p', 's'];
    const randomBotChoice = (Math.floor(Math.random() * 3));
    return botChoice[randomBotChoice];
}
// console.log(getBotInput());

function convertLetterToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    else return "Scissors";
}

function convertToEmoji(letter) {
    if (letter === "r") return "✊";    // Rock
    if (letter === "p") return "✋";    // Paper
    else return "✌️";                       // Scissors
}

function animateBounce(element) {
    element.classList.add('bounce', 'winner-glow');
    setTimeout(() => element.classList.remove('bounce'), 600);
}

function shakeHands(callback) {
    // Add shake animation
    userEmoji_span.classList.add('shake');
    botEmoji_span.classList.add('shake');

    // After shake duration, remove animation and call the callback
    setTimeout(() => {
        userEmoji_span.classList.remove('shake');
        botEmoji_span.classList.remove('shake');

        if (callback) callback(); // safely call callback
    }, 500); // match your shake animation duration
}

function startCountdown(callback) {
    const words = ["Rock...", "Paper...", "Scissors...", "SHOOT!"];
    let i = 0;

    countdown_div.innerHTML = words[i];
    const interval = setInterval(() => {
        i++;
        if (i < words.length) {
            countdown_div.innerHTML = words[i];
        } else {
            clearInterval(interval);
            countdown_div.innerHTML = ""; // hide countdown
            if (callback) callback();   // start the game after countdown
        }
    }, 1000); // 700ms per word
}

countdown_div.classList.add('bounce');
setTimeout(() => countdown_div.classList.remove('bounce'), 600);

function win_user(userWin, botLoose) {
    userScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    userEmoji_span.innerHTML = convertToEmoji(userWin);
    botEmoji_span.innerHTML = convertToEmoji(botLoose);
    result_p.innerHTML = `🏆 ${convertLetterToWord(userWin)} destroys ${convertLetterToWord(botLoose)} 🔥🔥 User Win!! 🔥🔥`;
    userEmoji_span.classList.add('winner-glow');
    botEmoji_span.classList.remove('winner-glow');
    console.log("User Win, Bot Loose!! " + userScore);
    // alert("Hurrah!!! USER WIN!!");
}

function win_bot(userLoose, botWin) {
    botScore++;
    botScore_span.innerHTML = botScore;
    userScore_span.innerHTML = userScore;
    userEmoji_span.innerHTML = convertToEmoji(userLoose);
    botEmoji_span.innerHTML = convertToEmoji(botWin);
    result_p.innerHTML = `🏆 ${convertLetterToWord(botWin)} destroys ${convertLetterToWord(userLoose)} 🔥🔥 Bot Win!! 🔥🔥`;
    userEmoji_span.classList.remove('winner-glow');
    botEmoji_span.classList.add('winner-glow');
    console.log("Bot Win, User Loose!! " + botScore);
    // alert("Hurrah!!! BOT WIN!!");
}

function revealWinner(userWin, botWin) {
    shakeHands();

    setTimeout(() => {
        if (userWin) {
            userEmoji_span.classList.add('winner-glow');
            animateBounce(userEmoji_span);
            botEmoji_span.classList.remove('winner-glow');
        } else {
            botEmoji_span.classList.add('winner-glow');
            animateBounce(botEmoji_span);
            userEmoji_span.classList.remove('winner-glow');
        }
    }, 500);
}


function draw(userInputSame, botInputSame) {
    drawScore++;
    userEmoji_span.innerHTML = convertToEmoji(userInputSame);  // same choice
    botEmoji_span.innerHTML = convertToEmoji(botInputSame);
    const smallUserWord = "user".fontsize(3).sub();
    const smallBotWord = "bot".fontsize(3).sub();
    result_p.innerHTML = ` ${convertLetterToWord(userInputSame)} ${smallUserWord} equals ${convertLetterToWord(botInputSame)} ${smallBotWord} 🔥🔥 It's a tie!! 🔥🔥`;
    alert("It's a tie, " + drawScore + " times");
    console.log("It's a tie!! " + drawScore);
}

// function game(userInput) {
//     // console.log("input from the user: " + userInput);
//     const botInput = getBotChoice();
//     console.log("user input: " + userInput);
//     console.log("bot input: " + botInput);
//     const match = userInput + botInput;

//     // 1️⃣ Start countdown
//     startCountdown(() => {
//         // 2️⃣ After countdown, shake hands
//         shakeHands(() => {
//             // 3️⃣ After shake, show result
//             switch (match) {

//                 // User Wins, Bot Loose
//                 case "rs":
//                 case "pr":
//                 case "sp":
//                     win_user(userInput, botInput);
//                     // console.log("Yeah!! You win!!");
//                     // console.log("\n Bot loose -_-");
//                     break;

//                 // Bot Wins, User Loose
//                 case "rp":
//                 case "ps":
//                 case "sr":
//                     win_bot(userInput, botInput);
//                     // console.log("Yeah!! Bot win!!");
//                     // console.log("\n You loose -_-");
//                     break;

//                 // 🟦 Draw
//                 case "rr":
//                 case "pp":
//                 case "ss":
//                     draw(userInput, botInput);
//                     // console.log("It's a draw!!");
//                     break;

//                 default:
//                     console.log("Invalid input!!");
//             }
//         });
//     });
// }

function game(userInput) {
    result_p.innerHTML = ""; // hide previous result
    const botInput = getBotChoice();
    const match = userInput + botInput;

    startCountdown(() => {
        shakeHands(() => {
            switch(match){
                case "rs":
                case "pr":
                case "sp":
                    win_user(userInput, botInput);
                    break;
                case "rp":
                case "ps":
                case "sr":
                    win_bot(userInput, botInput);
                    break;
                case "rr":
                case "pp":
                case "ss":
                    draw(userInput, botInput);
                    break;
            }
        });
    });
}


function main() {
    rock_div.addEventListener('click', function () {
        // console.log("you clicked rock");
        game("r");
    })
    paper_div.addEventListener('click', function () {
        // console.log("you clicked paper");
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        // console.log("you clicked scissors");
        game("s");
    })
}

main();