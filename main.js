
// Selectors
let restart = document.querySelector('#restart');
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let playerScoreDiv = document.querySelector('#playerScore')
let machineScoreDiv = document.querySelector('#machineScore')
let displayImg = document.querySelector('#displayImg')
let machineSelect = document.querySelector('.machineSelect');

// Game State
let machineRock = false;
let machinePaper = false;
let machineScissor = false;

let playerRock = false;
let playerPaper = false;
let playerScissor = false;

var playerScore = 0;
var machineScore = 0;


// Game Functions
rock.addEventListener('click', () => {
    playerRock = true;
    playGame();
})

paper.addEventListener('click', () => {
    playerPaper = true;
    playGame();
})

scissor.addEventListener('click', () => {
    playerScissor = true;
    playGame();
})

let playerScoreMsg = () => {
    playerScore++;
    playerScoreDiv.textContent = playerScore;
    displayImg.src = "playerWin.jpeg"
    setTimeout(() => {
        displayImg.src = "rps.png"
    }, 1000);
}

let machineScoreMsg = () => {
    machineScore++;
    machineScoreDiv.textContent = machineScore;
    displayImg.src = "robot.png"
    setTimeout(() => {
        displayImg.src = "rps.png"
    }, 1000);
}

let draw = () => {
    displayImg.src = "draw.png"
    setTimeout(() => {
        displayImg.src = "rps.png"
    }, 1000);

}

function machinePick() {
    let rand = Math.random();
    if (rand < 0.34) {
        machineRock = true;
    } else if (rand <= 0.67) {
        machinePaper = true;
    } else {
        machineScissor = true;
    }
}

function machineChoice(select) {
    machineSelect.textContent = `Robot Selected ${select}`;
    machineSelect.classList.add('visible');
    // setTimeout(() => {
    //     machineSelect.classList.remove('visible');
    // }, 1000);
}

function playGame() {
    machinePick()
    decision();
    reset();
}

function decision() {

    if (machineRock == true && playerRock == true) {
        draw();
        machineChoice('ROCK');
    } else if (machineRock == true && playerPaper == true) {
        playerScoreMsg();
        machineChoice('ROCK');
    } else if (machineRock == true && playerScissor == true) {
        machineScoreMsg();
        machineChoice('ROCK');
    } else if (machinePaper == true && playerRock == true) {
        machineScoreMsg();
        machineChoice('PAPER');
    } else if (machinePaper == true && playerPaper == true) {
        draw();
        machineChoice('PAPER');
    } else if (machinePaper == true && playerScissor == true) {
        playerScoreMsg();
        machineChoice('PAPER');
        console.log("Player Wins 2")
    } else if (machineScissor == true && playerRock == true) {
        playerScoreMsg();
        machineChoice('SCISSORS');
        console.log("Player Wins 3")
    } else if (machineScissor == true && playerPaper == true) {
        machineScoreMsg();
        machineChoice('SCISSORS');
    }
    else {
        draw();
        machineChoice('SCISSORS');
    }
}

function reset() {
    machineRock = false;
    machinePaper = false;
    machineScissor = false;

    playerRock = false;
    playerPaper = false;
    playerScissor = false;
    console.log("reset")
}

const resetGame = () => {
    playerScore = 0;
    machineScore = 0;
    playerScoreDiv.textContent = playerScore;
    machineScoreDiv.textContent = machineScore;
    machineSelect.textContent = "";
    machineSelect.classList.remove('visible');
    reset();
    console.log(playerScore);
}

restart.addEventListener("click", resetGame);