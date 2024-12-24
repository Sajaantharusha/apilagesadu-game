function moveBackground() {
    let background = document.getElementsByTagName('body')[0];
    var
        _tmp = window.getComputedStyle(background, null).backgroundPosition.trim().split(/\s+/),
        positions = {
            'left': _tmp[0],
            'top': _tmp[1]
        };

    // increase the background position
    positions.left = parseInt(positions.left) - 10;
    background.style.backgroundPosition = positions.left + "px " + positions.top;
}

function moveBoxes() {
    let boxes = document.getElementsByClassName('trap');
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        let left = parseInt(window.getComputedStyle(box, null).left);
        if (left < -100) {
            box.style.left = "100%";
        } else {
            box.style.left = left - 10 + "px";
        }
    }
}