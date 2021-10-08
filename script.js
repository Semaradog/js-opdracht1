let elementTimer = document.getElementById("timer").innerHTML = '5';
let elementPlayerOne = document.getElementById("playerOne").innerHTML = "-";
let elementPlayerTwo = document.getElementById("playerTwo").innerHTML = "-";
let elementWinner = document.getElementById("winner").innerHTML = "Get Ready To Start!";

// elementTimer.innerHTML = 0;
// elementPlayerOne.innerHTML = "-";
// elementPlayerTwo.innerHTML = "-";
// elementWinner.innerHTML = "Get Ready To Start!";

let choisePlayerOne = "";
let choisePlayerTwo = "";
let timer = 5;
let clickNow = false;

function winner() {
    if ((choisePlayerOne == "") && (choisePlayerTwo == "")) {
        return "DRAW!";
    }
    if (choisePlayerOne == "") {
        return "Player Two Wins!";
    }
    if (choisePlayerTwo == "") {
        return "Player One Wins!";
    }
    if ((choisePlayerOne == "1") && (choisePlayerTwo == "8")) {
        return "DRAW!";
    }
    if ((choisePlayerOne == "1") && (choisePlayerTwo == "9")) {
        return "Player Two Wins!";
    }
    if ((choisePlayerOne == "1") && (choisePlayerTwo == "0")) {
        return "Player One Wins!";
    }
    if ((choisePlayerOne == "2") && (choisePlayerTwo == "8")) {
        return "Player One Wins!";
    }
    if ((choisePlayerOne == "2") && (choisePlayerTwo == "9")) {
        return "DRAW!";    }

    if ((choisePlayerOne == "2") && (choisePlayerTwo == "0")) {
        return "Player Two Wins!";
    }
    if ((choisePlayerOne == "3") && (choisePlayerTwo == "8")) {
        return "Player Two Wins!";
    }
    if ((choisePlayerOne == "3") && (choisePlayerTwo == "9")) {
        return "Player One Wins!";
    }
    if ((choisePlayerOne == "3") && (choisePlayerTwo == "0")) {
        return "DRAW!";
    }
}

function countDown() {
    clickNow = false;
    if (timer == 0) {
        gameStart();
    }
    else {
        timer = timer - 1;
        elementTimer.innerHTML = timer;
        setTimeout(countDown, 500);
    }
}

function gameStart() {
    clickNow = true;
    timer = 4;
    elementWinner.innerHTML = "Game Has Started!";
    gameCountDown();
}

function gameCountDown() {
    if (timer == 0) {
        elementWinner.innerHTML = winner();
        elementchoisePlayerOne.innerHTML = choisePlayerOne;
        elementchoisePlayerTwo.innerHTML = choisePlayerTwo;
    }
    else {
        timer = timer - 1;
        elementTimer.innerHTML = timer;
        setTimeOut(gameCountDown, 500)
    }
}

document.addEventListener('Keydown', function (Event) {

    if (Event.key === '') {
        countDown();
    }

    if (clickNow == true) {
        if (Event.key === '1') {
            choisePlayerOne = "1";
        }
        if (Event.key === '2') {
            choisePlayerOne = "2";
        }
        if (Event.key === '3') {
            choisePlayerOne = "3";
        }
        if (Event.key === '8') {
            choisePlayerTwo = "8";
        }
        if (Event.key === '9') {
            choisePlayerTwo = "9";
        }
        if (Event.key === '0') {
            choisePlayerTwo = "0";
        }
    }
});

console.log(gameCountDown);