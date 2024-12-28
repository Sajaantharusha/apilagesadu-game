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

function createRandomObstacles() {
    if (!isRunning) return

    let obstacleType = Math.random() < 0.5 ? 'box' : 'ganja';
    const clonedElement = document.getElementsByClassName(obstacleType)[0].cloneNode(true);
    clonedElement.classList.remove('hidden');
    document.body.appendChild(clonedElement);
}

function moveObstacles() {
    for (let i = 2; i < obstacles.length; i++) {
        let obstacle = obstacles[i];
        let left = parseInt(window.getComputedStyle(obstacle, null).left);
        if (left < -100) {
            obstacle.remove();
        } else {
            obstacle.style.left = left - getMovingSpeed() + "px";
        }
    }
}

function checkCollision() {
    for (let i = 2; i < obstacles.length; i++) {
        let obstacle = obstacles[i];

        let gameCharacterRect = gameCharacter.getBoundingClientRect();
        let obstacleRect = obstacle.getBoundingClientRect();
        if (gameCharacterRect.right - 35 > obstacleRect.left && gameCharacterRect.bottom - 35 > obstacleRect.top) {

            if (obstacle.classList.contains('box')) {
                gameOver();
            }

            if (obstacle.classList.contains('ganja')) {
                obstacle.style.display = "none";
                score += 1;
                scoreElement.innerHTML = score;
            }
        }
    }
}

function backgroundMusic(play = true) {
    document.getElementById("backgroundMusic")[play ? 'play' : 'pause']();
}

function gameOver() {
    isRunning = false;
    backgroundMusic(false);
    gameCharacter.style.rotate = "60deg";
    gameOverImage.style.display = "block";
    overlay.classList.remove('hidden');
    gameOverMusic.play();
    clearInterval(runnerInterval);
}