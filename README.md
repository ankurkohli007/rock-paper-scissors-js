
# Rock-Paper-Scissors (JavaScript)

A lightweight, browser-based Rock-Paper-Scissors game built using plain **HTML**, **CSS**, and **JavaScript**.  
The project focuses on simple UI, clean structure, and beginner-friendly logic that clearly demonstrates DOM manipulation and event handling.

---

## 📌 Overview

This project allows a player to compete against the computer in a classic Rock-Paper-Scissors match.  
Each round:

1. The player selects Rock, Paper, or Scissors.
2. The computer randomly generates its choice.
3. The winner is calculated using the standard rules.
4. The UI updates with the result and the ongoing score.

The game runs entirely in the browser — no libraries or build tools are required.

---

## 🚀 Live Demo

## 🚀 Live Demo of Portfolio
Check out the live version of this game: [Click here to play game](https://ankurkohli007.github.io/rock-paper-scissors-js/)
---

## 📂 Project Structure

```bash
│
├── index.html → Main interface (UI layout)
├── style.css → Styling & visual formatting
├── app.js → Game logic and event handling
└── images/ → Images
│── README.md           # Project documentation
```


Below is a detailed explanation of each file.

---

# 📄 File Descriptions

---

## 1️⃣ index.html — Main HTML Structure

The `index.html` file contains:

### ✔ UI Layout
- The game title  
- Three clickable options (rock, paper, scissors)  
- Display areas for:
  - Player’s choice  
  - Computer’s choice  
  - Round results  
  - Scoreboard  

### ✔ DOM Elements Targeted by JavaScript
Several IDs/classes are included so JavaScript can update content dynamically:

- Buttons (rock, paper, scissors)  
- Elements displaying scores  
- Elements showing choices  
- A result message container  

### ✔ Linked Files
```html
<link rel="stylesheet" href="style.css">
<script src="app.js"></script>
```
## 2️⃣ style.css — Styling & Layout

This file controls the appearance and visual structure of the game.

### ✔ Layout & Positioning
- Centers the game container on the screen  
- Provides spacing and clean alignment  
- Ensures the interface looks balanced and visually appealing  

### ✔ Buttons / Choice Icons
- Styled to appear as interactive, clickable options  
- Includes hover effects for better feedback  
- Defines padding, sizing, borders, and transitions  

### ✔ Typography & Colors
- Uses readable, consistent fonts  
- Adds vibrant colors for game results (win/lose/draw)  
- Maintains strong contrast between UI sections for clarity  

### ✔ Responsive Design
- Adapts layout for smaller screens such as phones and tablets  
- Ensures buttons and text remain easy to interact with on any device  

The CSS delivers a simple, clean, and modern user interface without relying on external frameworks.

---

## 3️⃣ app.js — Game Logic Script

This is the main script controlling all the functionality and interactions of the game.

### ✔ 1. DOM Selection
The script begins by selecting important HTML elements, including:
- Score display elements  
- Rock/Paper/Scissors buttons  
- Result message container  
- Player and computer choice display sections  

### ✔ 2. Event Listeners
Each choice button triggers the main game logic when clicked:
```javascript
rockBtn.addEventListener('click', () => playRound('rock'));
```
### ✔ 3. Computer Choice

The computer randomly selects one of the three options for each round:

```javascript
const options = ['rock', 'paper', 'scissors'];
const computerChoice = options[Math.floor(Math.random() * 3)];
```

### ✔ 4. Winner Logic

The game implements classic Rock-Paper-Scissors rules:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

Based on the player’s and computer’s choices, the outcome is determined as:

- Win
- Lose
- Draw

### ✔ 5. Score Tracking

The script keeps track of scores for both the player and the computer. Scores update dynamically after every round to reflect the current game state.

### ✔ 6. UI Updates
After each round, the script updates the user interface to display:

- Player and computer choices
- Result of the round (Win / Lose / Draw)
- Updated score text
- Optional styling or animations

All updates happen dynamically without reloading the page, ensuring smooth gameplay.

**All Copyright are reserved.**