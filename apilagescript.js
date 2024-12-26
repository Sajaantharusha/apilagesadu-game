var isJumping = false;
var isRunning = false;
var gameCharacter = document.getElementById("apilagesadu")
let obstacles = document.getElementsByClassName('obstacle');
let boxes = document.getElementsByClassName('box');
let ganjas = document.getElementsByClassName('ganja');

function controller(event) {

    if (event.key == "Enter") {
        run();
        backgroundMusic();
    }


    if (event.key == " ") {
        jump();
    }
}




function run() {
    if (isRunning) {
        return;
    } else {
        isRunning = true;
    }

    let runImageNumber = 1;

    setInterval(() => {
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