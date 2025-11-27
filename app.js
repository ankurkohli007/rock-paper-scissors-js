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


function win_user(userWin, botLoose) {
    userScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    userEmoji_span.innerHTML = convertToEmoji(userWin);
    botEmoji_span.innerHTML = convertToEmoji(botLoose);
    result_p.innerHTML = `🏆 ${convertLetterToWord(userWin)} destroys ${convertLetterToWord(botLoose)} 🔥🔥 User Win!! 🔥🔥`;
    console.log("User Win, Bot Loose!! " + userScore);
    alert("Hurrah!!! USER WIN!!");
}

function win_bot(userLoose, botWin) {
    botScore++;
    botScore_span.innerHTML = botScore;
    userScore_span.innerHTML = userScore;
    userEmoji_span.innerHTML = convertToEmoji(userLoose);
    botEmoji_span.innerHTML = convertToEmoji(botWin);
    result_p.innerHTML = `🏆 ${convertLetterToWord(botWin)} destroys ${convertLetterToWord(userLoose)} 🔥🔥 Bot Win!! 🔥🔥`;
    console.log("Bot Win, User Loose!! " + botScore);
    alert("Hurrah!!! BOT WIN!!");
}

function draw(userInputSame, botInputSame) {
    drawScore++;
    userEmoji_span.innerHTML = convertToEmoji(userInputSame);  // same choice
    botEmoji_span.innerHTML = convertToEmoji(botInputSame);
    const smallUserWord = "userInput".fontsize(3);
    const smallBotWord = "botInput".fontsize(3);
    result_p.innerHTML = ` ${convertLetterToWord(userInputSame)} (${smallUserWord}) same as ${convertLetterToWord(botInputSame)} (${smallBotWord}) 🔥🔥 It's a tie!! 🔥🔥`;
    alert("It's a tie, " + drawScore + " times");
    console.log("It's a tie!! " + drawScore);
}

function game(userInput) {
    // console.log("input from the user: " + userInput);
    const botInput = getBotChoice();
    console.log("user input: " + userInput);
    console.log("bot input: " + botInput);
    const match = userInput + botInput;

    switch (match) {

        // User Wins, Bot Loose
        case "rs":
        case "pr":
        case "sp":
            win_user(userInput, botInput);
            // console.log("Yeah!! You win!!");
            // console.log("\n Bot loose -_-");
            break;

        // Bot Wins, User Loose
        case "rp":
        case "ps":
        case "sr":
            win_bot(userInput, botInput);
            // console.log("Yeah!! Bot win!!");
            // console.log("\n You loose -_-");
            break;

        // 🟦 Draw
        case "rr":
        case "pp":
        case "ss":
            draw(userInput, botInput);
            // console.log("It's a draw!!");
            break;

        default:
            console.log("Invalid input!!");
    }

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