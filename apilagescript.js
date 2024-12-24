var isJumping = false;
var isRunning = false;
var gameCharacter = document.getElementById("apilagesadu")

function controller(event) {

    if (event.key == "Enter") {
        run();
        document.getElementById("audio").play()
    }


    if (event.key == " ") {
        jump();
    }
}




function run() {
    if (isRunning) return;

    let runImageNumber = 1;

    setInterval(() => {
        // if (isJumping) return;

        runImageNumber = runImageNumber + 1;

        if (runImageNumber == 6) {
            runImageNumber = 1;
        }

        document.getElementById("apilagesadu").src = "run" + runImageNumber + ".png";

        moveBackground();
        moveBoxes();
    }, 150);
}



var jumpImageNumber = 1;
function jump() {
    isJumping = true;
    let jumpInterval = 0;
    jumpInterval = setInterval(() => {

        jumpImageNumber = jumpImageNumber + 1;

        gameCharacterMarginTop = parseInt(window.getComputedStyle(gameCharacter, null).marginTop);

        //increase image margin top and decrease it to make it look like jumping
        const steps = 70;
        if (jumpImageNumber > 1 && jumpImageNumber <= 4) {
            gameCharacter.style.marginTop = parseInt(gameCharacterMarginTop - steps) + "px";
        } else {
            gameCharacter.style.marginTop = parseInt(gameCharacterMarginTop + steps) + "px";
        }
        

        if (jumpImageNumber == 7) {
            jumpImageNumber = 1;
            clearInterval(jumpInterval);
            isJumping = false;
        }

        gameCharacter.src = "jump" + jumpImageNumber + ".png";
    }, 150);
}