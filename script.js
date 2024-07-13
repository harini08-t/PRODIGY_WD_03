
var btn = document.getElementById("startStop");
var disp = document.getElementById("time");
var laps = document.getElementById("laps");
var lap = 0;
var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;
var stoptime = true;

function startStopTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
    btn.innerHTML = "Stop";
  }else if(stoptime == false){
    stoptime = true;
    btn.innerHTML = "Start";
  }
}

function timerCycle() {
    if (stoptime == false) {
    msec = parseInt(msec);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    msec = msec + 1;
    
    if (msec == 100) {
      sec = sec + 1;
      msec = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    
    if (msec < 10 || msec == 0) {
      msec = '0' + msec;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    time.innerHTML = hr + ':' + min + ':' + sec + ':' + msec;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
  time.innerHTML = '00:00:00:00';
  laps.innerHTML = "";
  hr = 0;
  min = 0;
  sec = 0;
  msec = 0;
  lap = 0;
}

function recordLap() {
  lap++;
  var lapNode = document.createElement("span");
  var txt = document.createTextNode("Lap " + lap + ": " + hr + ':' + min + ':' + sec + ':' + msec);
  var br = document.createElement("br");
  lapNode.appendChild(txt);
  laps.appendChild(lapNode);
  laps.appendChild(br);
}
