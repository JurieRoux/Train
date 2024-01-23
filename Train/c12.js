let trainSpeed = 10;
let trainPosition = 0;
let animation;

let train = document.getElementById("train");
train.addEventListener("click", speedUp);

let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 700) {
        alert("You crashed!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 700) {
        clearInterval(animation);
        console.log("How far will you go?");
    }
}