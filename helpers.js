function getMovingSpeed() {
    return isJumping ? 70 : 20;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}