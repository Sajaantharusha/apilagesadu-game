function controller(event) {
    if (event.key == "Enter") {
        if (runWorkerNumber == 0) {
            run();
        }
    }

}

var runImageNumber = 1;
var runWorkerNumber = 0;
// var runSound = new Audio("run.mp3")
// runSound.loop = true;




function run() {
}

runWorkerNumber = setInterval(() => {


    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 6) {
        runImageNumber = 1;

    }
    document.getElementById("apilagesadu").src = "run" + runImageNumber + ".png";

}, 150);

