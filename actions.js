function moveBackground() {
    let background = document.getElementsByTagName('body')[0];
    var
        _tmp = window.getComputedStyle(background, null).backgroundPosition.trim().split(/\s+/),
        positions = {
            'left': _tmp[0],
            'top': _tmp[1]
        };

    // increase the background position
    positions.left = parseInt(positions.left) - getMovingSpeed();
    background.style.backgroundPosition = positions.left + "px " + positions.top;
}

function moveObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        let obstacle = obstacles[i];
        let left = parseInt(window.getComputedStyle(obstacle, null).left);
        if (left < -100) {
            obstacle.style.left = "100%";
        } else {
            obstacle.style.left = left - getMovingSpeed() + "px";
        }
    }
}

function checkCollision() {
    for (let i = 0; i < obstacles.length; i++) {
        let obstacle = obstacles[i];
        let gameCharacterRect = gameCharacter.getBoundingClientRect();
        let obstacleRect = obstacle.getBoundingClientRect();
        if (gameCharacterRect.right - 35 > obstacleRect.left && gameCharacterRect.bottom - 35 > obstacleRect.top) {

            if (obstacle.classList.contains('box')) {
                gameOver();
            }
        }
    }
}

function backgroundMusic(play = true) {
    document.getElementById("backgroundMusic")[play ? 'play' : 'pause']();
}

function gameOver() {
    backgroundMusic(false);
    gameOverImage.style.display = "block";
    overlay.classList.remove('hidden');
    gameOverMusic.play();
    clearInterval(runnerInterval);
}