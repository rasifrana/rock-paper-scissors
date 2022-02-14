// let $ = (elm) => {
//     return document.querySelector(elm);
// }

// let h = $("h1");

let machineRock = false;
let machinePaper = false;
let machineScissor = false;

let playerRock = false;
let playerPaper = false;
let playerScissor = false;

let win = document.querySelector('#win-msg');
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")


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

function machinePick() {
    let rand = Math.random();
    if (rand < 0.34) {
        machineRock = true;
        console.log("ROCK " + machineRock + machineScissor + machinePaper)
    } else if (rand <= 0.67) {
        machinePaper = true;
        console.log("Paper " + machinePaper + machineScissor + machineRock)
    } else {
        machineScissor = true;
        console.log("Scissor" + machineScissor + machineRock + machinePaper);
    }
}

function playGame() {
    machinePick()
    decision();
    reset();
}

function decision() {

    if (machineRock == true && playerRock == true) {
        console.log("DRAW");
        winMsg("DRAW")
    } else if (machineRock == true && playerPaper == true) {
        console.log("Player 1")
        winMsg('PLAYER')
    } else if (machineRock == true && playerScissor == true) {
        console.log("Machine won 1")
        winMsg('Machine Won Uhh')
    } else if (machinePaper == true && playerRock == true) {
        console.log("Machine Wins 2")
        winMsg('Machine Won Uhh')
    } else if (machinePaper == true && playerPaper == true) {
        console.log("DRAW");
        winMsg("DRAW")
    } else if (machinePaper == true && playerScissor == true) {
        console.log("Player Wins 2")
        winMsg("YOU WON YAY")
    } else if (machineScissor == true && playerRock == true) {
        console.log("Player Wins 3")
        winMsg("YOU WON YAY")
    } else if (machineScissor == true && playerPaper == true) {
        console.log("Machine Wins 3");
        winMsg('Machine Won Uhh')
    }
    else {
        console.log("DRAW")
        winMsg('Its A DRAW')
    }
}

function winMsg(message) {
    win.textContent = message;
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
