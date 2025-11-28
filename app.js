// let userScore = 0;
// let botScore = 0;
// let drawScore = 0;
// let isPlaying = false; // Prevent multiple clicks during animation

// const userScore_span = document.getElementById("user-score");
// const botScore_span = document.getElementById("bot-score");
// const scoreBoard_div = document.querySelector(".score-board");
// const result_p = document.querySelector(".result > p");
// const rock_div = document.getElementById("r");
// const paper_div = document.getElementById("p");
// const scissors_div = document.getElementById("s");
// const userEmoji_span = document.getElementById("user-emoji");
// const botEmoji_span = document.getElementById("bot-emoji");
// const countdown_div = document.getElementById('countdown');

// // Sound effects (optional - will work silently if sounds aren't added)
// const sounds = {
//     click: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSiJ0PPVgjMGHm7A7+OZUA=='),
//     win: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSiJ0PPVgjMGHm7A7+OZUA=='),
//     lose: new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSiJ0PPVgjMGHm7A7+OZUA==')
// };

// function getBotChoice() {
//     const botChoice = ['r', 'p', 's'];
//     const randomBotChoice = Math.floor(Math.random() * 3);
//     return botChoice[randomBotChoice];
// }

// function convertLetterToWord(letter) {
//     const words = { r: "Rock", p: "Paper", s: "Scissors" };
//     return words[letter];
// }

// function convertToEmoji(letter) {
//     const emojis = { r: "✊", p: "✋", s: "✌️" };
//     return emojis[letter];
// }

// function playSound(soundName) {
//     if (sounds[soundName]) {
//         sounds[soundName].currentTime = 0;
//         sounds[soundName].play().catch(() => {}); // Fail silently if sound doesn't work
//     }
// }

// function animateBounce(element) {
//     element.classList.add('bounce', 'winner-glow');
//     setTimeout(() => element.classList.remove('bounce'), 600);
// }

// function animateScore(scoreElement, newScore) {
//     // Pulse animation for score update
//     scoreElement.style.transform = 'scale(1.5)';
//     scoreElement.style.transition = 'transform 0.3s ease';
//     setTimeout(() => {
//         scoreElement.style.transform = 'scale(1)';
//     }, 300);
// }

// function shakeHands(callback) {
//     userEmoji_span.classList.add('shake');
//     botEmoji_span.classList.add('shake');

//     setTimeout(() => {
//         userEmoji_span.classList.remove('shake');
//         botEmoji_span.classList.remove('shake');
//         if (callback) callback();
//     }, 500);
// }

// function startCountdown(callback) {
//     const words = ["Rock...", "Paper...", "Scissors...", "SHOOT!"];
//     let i = 0;

//     countdown_div.innerHTML = words[i];
//     countdown_div.classList.add('countdown-pulse');
    
//     const interval = setInterval(() => {
//         i++;
//         if (i < words.length) {
//             countdown_div.innerHTML = words[i];
//             playSound('click');
//         } else {
//             clearInterval(interval);
//             countdown_div.innerHTML = "";
//             countdown_div.classList.remove('countdown-pulse');
//             if (callback) callback();
//         }
//     }, 700);
// }

// function createConfetti() {
//     const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
//     for (let i = 0; i < 30; i++) {
//         const confetti = document.createElement('div');
//         confetti.className = 'confetti';
//         confetti.style.left = Math.random() * 100 + '%';
//         confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         confetti.style.animationDelay = Math.random() * 0.5 + 's';
//         confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
//         document.body.appendChild(confetti);
        
//         setTimeout(() => confetti.remove(), 3000);
//     }
// }

// function updateResultWithAnimation(message, isWin, isDraw) {
//     result_p.style.opacity = '0';
//     result_p.style.transform = 'translateY(-20px)';
    
//     setTimeout(() => {
//         result_p.innerHTML = message;
//         result_p.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//         result_p.style.opacity = '1';
//         result_p.style.transform = 'translateY(0)';
        
//         if (isWin) {
//             createConfetti();
//             playSound('win');
//         } else if (!isDraw) {
//             playSound('lose');
//         }
//     }, 100);
// }

// function win_user(userWin, botLoose) {
//     userScore++;
//     userScore_span.innerHTML = userScore;
//     botScore_span.innerHTML = botScore;
//     animateScore(userScore_span, userScore);
    
//     userEmoji_span.innerHTML = convertToEmoji(userWin);
//     botEmoji_span.innerHTML = convertToEmoji(botLoose);
    
//     const message = `🏆 ${convertLetterToWord(userWin)} destroys ${convertLetterToWord(botLoose)} 🔥 User Win! 🔥`;
//     updateResultWithAnimation(message, true, false);
    
//     userEmoji_span.classList.add('winner-glow');
//     botEmoji_span.classList.remove('winner-glow');
//     animateBounce(userEmoji_span);
    
//     console.log("User Win! " + userScore);
// }

// function win_bot(userLoose, botWin) {
//     botScore++;
//     botScore_span.innerHTML = botScore;
//     userScore_span.innerHTML = userScore;
//     animateScore(botScore_span, botScore);
    
//     userEmoji_span.innerHTML = convertToEmoji(userLoose);
//     botEmoji_span.innerHTML = convertToEmoji(botWin);
    
//     const message = `🏆 ${convertLetterToWord(botWin)} destroys ${convertLetterToWord(userLoose)} 🤖 Bot Wins! 🤖`;
//     updateResultWithAnimation(message, false, false);
    
//     userEmoji_span.classList.remove('winner-glow');
//     botEmoji_span.classList.add('winner-glow');
//     animateBounce(botEmoji_span);
    
//     console.log("Bot Win! " + botScore);
// }

// function createDrawEffect() {
//     // Flash the screen with yellow
//     const flash = document.createElement('div');
//     flash.className = 'draw-flash';
//     document.body.appendChild(flash);
//     setTimeout(() => flash.remove(), 800);
    
//     // Create "DRAW!" text explosion
//     const drawText = document.createElement('div');
//     drawText.className = 'draw-explosion';
//     drawText.innerHTML = '🤝 DRAW! 🤝';
//     document.body.appendChild(drawText);
//     setTimeout(() => drawText.remove(), 2000);
    
//     // Create equal sign particles
//     for (let i = 0; i < 15; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'draw-particle';
//         particle.innerHTML = '=';
//         particle.style.left = Math.random() * 100 + '%';
//         particle.style.animationDelay = Math.random() * 0.3 + 's';
//         particle.style.fontSize = (Math.random() * 20 + 30) + 'px';
//         document.body.appendChild(particle);
//         setTimeout(() => particle.remove(), 2000);
//     }
// }

// function shakeScreen() {
//     document.body.classList.add('screen-shake');
//     setTimeout(() => document.body.classList.remove('screen-shake'), 500);
// }

// function draw(userInputSame, botInputSame) {
//     drawScore++;
//     userEmoji_span.innerHTML = convertToEmoji(userInputSame);
//     botEmoji_span.innerHTML = convertToEmoji(botInputSame);
    
//     const message = `⚡ ${convertLetterToWord(userInputSame)} equals ${convertLetterToWord(botInputSame)} ⚡ <span class="draw-count">DRAW #${drawScore}</span> ⚡`;
//     updateResultWithAnimation(message, false, true);
    
//     // Visual effects for draw
//     createDrawEffect();
//     shakeScreen();
    
//     // Both glow for a tie with special color
//     userEmoji_span.classList.add('tie-glow', 'bounce');
//     botEmoji_span.classList.add('tie-glow', 'bounce');
    
//     // Make score board flash
//     scoreBoard_div.classList.add('draw-board-flash');
    
//     setTimeout(() => {
//         userEmoji_span.classList.remove('tie-glow', 'bounce');
//         botEmoji_span.classList.remove('tie-glow', 'bounce');
//         scoreBoard_div.classList.remove('draw-board-flash');
//     }, 1500);
    
//     console.log("It's a tie! " + drawScore);
// }

// function addButtonClickEffect(button) {
//     button.classList.add('button-pressed');
//     setTimeout(() => button.classList.remove('button-pressed'), 200);
// }

// function game(userInput, buttonElement) {
//     if (isPlaying) return; // Prevent multiple clicks
//     isPlaying = true;
    
//     addButtonClickEffect(buttonElement);
//     result_p.innerHTML = "";
    
//     // Reset emojis to default
//     userEmoji_span.innerHTML = "👤";
//     botEmoji_span.innerHTML = "🤖";
//     userEmoji_span.classList.remove('winner-glow');
//     botEmoji_span.classList.remove('winner-glow');
    
//     const botInput = getBotChoice();
//     const match = userInput + botInput;

//     startCountdown(() => {
//         shakeHands(() => {
//             switch(match) {
//                 case "rs":
//                 case "pr":
//                 case "sp":
//                     win_user(userInput, botInput);
//                     break;
//                 case "rp":
//                 case "ps":
//                 case "sr":
//                     win_bot(userInput, botInput);
//                     break;
//                 case "rr":
//                 case "pp":
//                 case "ss":
//                     draw(userInput, botInput);
//                     break;
//             }
            
//             setTimeout(() => {
//                 isPlaying = false;
//             }, 1000);
//         });
//     });
// }

// function addHoverEffects() {
//     [rock_div, paper_div, scissors_div].forEach(button => {
//         button.addEventListener('mouseenter', () => {
//             if (!isPlaying) {
//                 button.style.transform = 'scale(1.1) translateY(-5px)';
//             }
//         });
        
//         button.addEventListener('mouseleave', () => {
//             button.style.transform = 'scale(1) translateY(0)';
//         });
//     });
// }

// function main() {
//     rock_div.addEventListener('click', function() {
//         game("r", this);
//     });
    
//     paper_div.addEventListener('click', function() {
//         game("p", this);
//     });
    
//     scissors_div.addEventListener('click', function() {
//         game("s", this);
//     });
    
//     addHoverEffects();
    
//     // Initialize with default emojis
//     userEmoji_span.innerHTML = "👤";
//     botEmoji_span.innerHTML = "🤖";
// }

// main();

let userScore = 0;
let botScore = 0;
let drawScore = 0;
let isPlaying = false; // Prevent multiple clicks during animation

const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userEmoji_span = document.getElementById("user-emoji");
const botEmoji_span = document.getElementById("bot-emoji");
const countdown_div = document.getElementById('countdown');

// Enhanced sound system using Web Audio API
let audioContext;

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

// Create click sound (short beep)
function createClickSound() {
    try {
        const ctx = initAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.value = 800;
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Create win sound (triumphant ascending tones)
function createWinSound() {
    try {
        const ctx = initAudioContext();
        
        // Three rising tones
        [0, 0.1, 0.2].forEach((delay, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.frequency.value = 400 + (i * 200); // 400Hz, 600Hz, 800Hz
            gain.gain.setValueAtTime(0.2, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + 0.2);
            
            osc.start(ctx.currentTime + delay);
            osc.stop(ctx.currentTime + delay + 0.2);
        });
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Create lose sound (descending tones)
function createLoseSound() {
    try {
        const ctx = initAudioContext();
        
        // Two descending tones
        [0, 0.15].forEach((delay, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.frequency.setValueAtTime(600 - (i * 200), ctx.currentTime + delay);
            osc.frequency.exponentialRampToValueAtTime(200 - (i * 50), ctx.currentTime + delay + 0.3);
            
            gain.gain.setValueAtTime(0.15, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + 0.3);
            
            osc.start(ctx.currentTime + delay);
            osc.stop(ctx.currentTime + delay + 0.3);
        });
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Create draw sound (bouncy boing)
function createDrawSound() {
    try {
        const ctx = initAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        // Create a "boing" sound effect
        osc.frequency.setValueAtTime(700, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);
        osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.16);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.24);
        
        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Create shoot sound (punch effect)
function createShootSound() {
    try {
        const ctx = initAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(100, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
        console.log('Audio not supported');
    }
}

function getBotChoice() {
    const botChoice = ['r', 'p', 's'];
    const randomBotChoice = Math.floor(Math.random() * 3);
    return botChoice[randomBotChoice];
}

function convertLetterToWord(letter) {
    const words = { r: "Rock", p: "Paper", s: "Scissors" };
    return words[letter];
}

function convertToEmoji(letter) {
    const emojis = { r: "✊", p: "✋", s: "✌️" };
    return emojis[letter];
}

function playSound(soundName) {
    switch(soundName) {
        case 'click':
            createClickSound();
            break;
        case 'win':
            createWinSound();
            break;
        case 'lose':
            createLoseSound();
            break;
        case 'draw':
            createDrawSound();
            break;
        case 'shoot':
            createShootSound();
            break;
    }
}

function animateBounce(element) {
    element.classList.add('bounce', 'winner-glow');
    setTimeout(() => element.classList.remove('bounce'), 600);
}

function animateScore(scoreElement, newScore) {
    // Pulse animation for score update
    scoreElement.style.transform = 'scale(1.5)';
    scoreElement.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
        scoreElement.style.transform = 'scale(1)';
    }, 300);
}

function shakeHands(callback) {
    userEmoji_span.classList.add('shake');
    botEmoji_span.classList.add('shake');

    setTimeout(() => {
        userEmoji_span.classList.remove('shake');
        botEmoji_span.classList.remove('shake');
        if (callback) callback();
    }, 500);
}

function startCountdown(callback) {
    const words = ["Rock...", "Paper...", "Scissors...", "SHOOT!"];
    let i = 0;

    countdown_div.innerHTML = words[i];
    countdown_div.classList.add('countdown-pulse');
    
    const interval = setInterval(() => {
        i++;
        if (i < words.length) {
            countdown_div.innerHTML = words[i];
            if (i === 3) {
                playSound('shoot'); // Special sound for SHOOT!
            } else {
                playSound('click');
            }
        } else {
            clearInterval(interval);
            countdown_div.innerHTML = "";
            countdown_div.classList.remove('countdown-pulse');
            if (callback) callback();
        }
    }, 700);
}

function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function updateResultWithAnimation(message, isWin, isDraw) {
    result_p.style.opacity = '0';
    result_p.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        result_p.innerHTML = message;
        result_p.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        result_p.style.opacity = '1';
        result_p.style.transform = 'translateY(0)';
        
        if (isWin) {
            createConfetti();
            playSound('win');
        } else if (isDraw) {
            playSound('draw'); // Play the special draw sound
        } else {
            playSound('lose');
        }
    }, 100);
}

function win_user(userWin, botLoose) {
    userScore++;
    userScore_span.innerHTML = userScore;
    botScore_span.innerHTML = botScore;
    animateScore(userScore_span, userScore);
    
    userEmoji_span.innerHTML = convertToEmoji(userWin);
    botEmoji_span.innerHTML = convertToEmoji(botLoose);
    
    const message = `🏆 ${convertLetterToWord(userWin)} destroys ${convertLetterToWord(botLoose)} 🔥 User Win! 🔥`;
    updateResultWithAnimation(message, true, false);
    
    userEmoji_span.classList.add('winner-glow');
    botEmoji_span.classList.remove('winner-glow');
    animateBounce(userEmoji_span);
    
    console.log("User Win! " + userScore);
}

function win_bot(userLoose, botWin) {
    botScore++;
    botScore_span.innerHTML = botScore;
    userScore_span.innerHTML = userScore;
    animateScore(botScore_span, botScore);
    
    userEmoji_span.innerHTML = convertToEmoji(userLoose);
    botEmoji_span.innerHTML = convertToEmoji(botWin);
    
    const message = `🏆 ${convertLetterToWord(botWin)} destroys ${convertLetterToWord(userLoose)} 🤖 Bot Wins! 🤖`;
    updateResultWithAnimation(message, false, false);
    
    userEmoji_span.classList.remove('winner-glow');
    botEmoji_span.classList.add('winner-glow');
    animateBounce(botEmoji_span);
    
    console.log("Bot Win! " + botScore);
}

function createDrawEffect() {
    // Flash the screen with yellow
    const flash = document.createElement('div');
    flash.className = 'draw-flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 800);
    
    // Create "DRAW!" text explosion
    const drawText = document.createElement('div');
    drawText.className = 'draw-explosion';
    drawText.innerHTML = '🤝 DRAW! 🤝';
    document.body.appendChild(drawText);
    setTimeout(() => drawText.remove(), 2000);
    
    // Create equal sign particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'draw-particle';
        particle.innerHTML = '=';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 0.3 + 's';
        particle.style.fontSize = (Math.random() * 20 + 30) + 'px';
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
    }
}

function shakeScreen() {
    document.body.classList.add('screen-shake');
    setTimeout(() => document.body.classList.remove('screen-shake'), 500);
}

function draw(userInputSame, botInputSame) {
    drawScore++;
    userEmoji_span.innerHTML = convertToEmoji(userInputSame);
    botEmoji_span.innerHTML = convertToEmoji(botInputSame);
    
    const message = `⚡ ${convertLetterToWord(userInputSame)} equals ${convertLetterToWord(botInputSame)} ⚡ <span class="draw-count">DRAW #${drawScore}</span> ⚡`;
    updateResultWithAnimation(message, false, true);
    
    // Visual effects for draw
    createDrawEffect();
    shakeScreen();
    
    // Both glow for a tie with special color
    userEmoji_span.classList.add('tie-glow', 'bounce');
    botEmoji_span.classList.add('tie-glow', 'bounce');
    
    // Make score board flash
    scoreBoard_div.classList.add('draw-board-flash');
    
    setTimeout(() => {
        userEmoji_span.classList.remove('tie-glow', 'bounce');
        botEmoji_span.classList.remove('tie-glow', 'bounce');
        scoreBoard_div.classList.remove('draw-board-flash');
    }, 1500);
    
    console.log("It's a tie! " + drawScore);
}

function addButtonClickEffect(button) {
    button.classList.add('button-pressed');
    playSound('click'); // Add sound when button is clicked
    setTimeout(() => button.classList.remove('button-pressed'), 200);
}

function game(userInput, buttonElement) {
    if (isPlaying) return; // Prevent multiple clicks
    isPlaying = true;
    
    addButtonClickEffect(buttonElement);
    result_p.innerHTML = "";
    
    // Reset emojis to default
    userEmoji_span.innerHTML = "👤";
    botEmoji_span.innerHTML = "🤖";
    userEmoji_span.classList.remove('winner-glow');
    botEmoji_span.classList.remove('winner-glow');
    
    const botInput = getBotChoice();
    const match = userInput + botInput;

    startCountdown(() => {
        shakeHands(() => {
            switch(match) {
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
            
            setTimeout(() => {
                isPlaying = false;
            }, 1000);
        });
    });
}

function addHoverEffects() {
    [rock_div, paper_div, scissors_div].forEach(button => {
        button.addEventListener('mouseenter', () => {
            if (!isPlaying) {
                button.style.transform = 'scale(1.1) translateY(-5px)';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1) translateY(0)';
        });
    });
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r", this);
    });
    
    paper_div.addEventListener('click', function() {
        game("p", this);
    });
    
    scissors_div.addEventListener('click', function() {
        game("s", this);
    });
    
    addHoverEffects();
    
    // Initialize with default emojis
    userEmoji_span.innerHTML = "👤";
    botEmoji_span.innerHTML = "🤖";
}

main();
