function whileCount() {
    mySound = new sound("blastoff.mp3");
    mySound.play();
    document.getElementById("rocketButton").disabled = true;
    var currTime = 10;
    var i = 1;
    while (i < 12) {

//This code triggers the countdown for the rocket launch.  During the midway point, it lets people know that there's less than half way toward the launch.
        if (i == 11) {      
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning!  Less than half way towards launch: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Takeoff in: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerHTML = "Start pushed...";
    //This is repurposed code from the launch countdown for use within the weather report.  This is to make sure people have a clear view of how much time they must wait.
    //In addition to that, both buttons are disabled until the report is received.  This is to prevent people from skipping the timer.
    var weatherTime = 5;
    var wt = 1;
    while (wt < 7) {


        if (wt == 6) {      
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("weatherKey").innerHTML = "Weather Report Received!  Push 'Stop' to see it.";
                document.getElementById("stopButton").disabled = false;
            }, 1000 * wt);
        } else {
            setTimeout(function () {
                document.getElementById("weatherKey").innerHTML = "Please wait: " + weatherTime + " seconds...";
                weatherTime = weatherTime - 1;
            }, 1000 * wt);
        }
        wt = wt + 1;
    }
}

//This simply finishes the weather report
function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>5 seconds</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Weather:</td><td>Clear!</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

//This is the backbone for the sounds...
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}

