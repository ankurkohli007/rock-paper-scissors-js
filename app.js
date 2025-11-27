const userScore = 0;
const botScore = 0;
const userScore_span = document.getElementById("user-score"); // to signify it's a span tag in html
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board"); // to signify it's a div in html
const result_dev = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getBotInput(){
    const botInput = ['r', 'p', 's'];
    const randomBotInput = (Math.floor(Math.random() * 3));
    return botInput[randomBotInput];
}
// console.log(getBotInput());

function game(userInput){
    // console.log("input from the user: " + userInput);
    const botChoice = getBotInput();
    console.log("user input: " + userInput);
    console.log("bot input: " +botChoice);
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