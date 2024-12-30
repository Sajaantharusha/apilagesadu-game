var isJumping = false;
var isRunning = false;
var runnerInterval = null;
var score = 0;
var isGameOver = false;
let scoreElement = document.getElementById('score');
var gameCharacter = document.getElementById("apilagesadu")
let obstacles = document.getElementsByClassName('obstacle');
let boxes = document.getElementsByClassName('box');
let ganjas = document.getElementsByClassName('ganja');
let overlay = document.getElementById('overlay');
let gameOverImage = document.getElementById('apilagesaduend');
let gameOverMusic = document.getElementById('gameOverMusic');

function controller(event) {
    if (isGameOver) return;

    if (event.key == "Enter") {
        run();
        backgroundMusic();
    }

    if (event.key == " ") {
        jump();
    }

    if (event.type == "click") {

        if (!isRunning) {
            run();
            backgroundMusic();
        }

        if (isRunning) {
            jump();
        }
    }
}




function run() {
    if (isRunning) {
        return;
    } else {
        isRunning = true;
        createRandomObstacles();
    }

    let runImageNumber = 1;

    runnerInterval = setInterval(() => {
        moveBackground();
        moveObstacles();
        checkCollision();

        if (isJumping) return;

        runImageNumber = runImageNumber + 1;

        if (runImageNumber == 6) {
            runImageNumber = 1;
        }

        document.getElementById("apilagesadu").src = "run" + runImageNumber + ".png";
    }, 150);
}



function jump() {

    let jumpImageNumber = 1;
    let jumpInterval = 0;

    isJumping = true;

    jumpInterval = setInterval(() => {

        jumpImageNumber = jumpImageNumber + 1;

        gameCharacterBottom = parseInt(window.getComputedStyle(gameCharacter, null).bottom);

        //increase image margin top and decrease it to make it look like jumping
        const steps = 70;
        if (jumpImageNumber > 1 && jumpImageNumber <= 4) {
            gameCharacter.style.bottom = parseInt(gameCharacterBottom + steps) + "px";
        } else {
            gameCharacter.style.bottom = parseInt(gameCharacterBottom - steps) + "px";
        }
        

        if (jumpImageNumber == 7) {
            jumpImageNumber = 1;
            clearInterval(jumpInterval);
            isJumping = false;
        }

        gameCharacter.src = "jump" + jumpImageNumber + ".png";
    }, 150);
}

(function () {
    document.addEventListener("keyup", controller);
    document.addEventListener("click", controller);

    gameOverImage.onclick = () => window.location.reload();

    setInterval(() => {
        setTimeout(function () {
            createRandomObstacles();
        }, randomIntFromInterval(1000, 3000))
    }, 3000);
})();