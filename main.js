let hourDiv = document.getElementById('hourHand');
let minuteDiv = document.getElementById('minuteHand');
let secondDiv = document.getElementById('secondHand');

var clockOperate = () => {   //arrow function to meet the ES6 requirement
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hourDeg = (hours + minutes / 60 + seconds / 3600) * 30;
  let minDeg = (minutes + (seconds / 60)) * 6;
  let secDeg = seconds * 6;

  hourDiv.style.transform = "rotate(" + hourDeg + "deg)";
  minuteDiv.style.transform = "rotate(" + minDeg + "deg)";
  secondDiv.style.transform = "rotate(" + secDeg + "deg)";

};


setInterval(function () {
  clockOperate();
}, 1000)


// Alarm


var alarmSound = new Audio();
alarmSound.src = 'GOTalarm.mp3';
var alarmTimer;

function setAlarm(button) {
  var ms = document.getElementById('alarmTime').valueAsNumber;
  if (isNaN(ms)) {
    alert('By the gods, that is no date!')
    return;
  }

  var alarm = new Date(ms);
  var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());

  var timeDifference = alarmTime.getTime() - (new Date()).getTime();

  if (timeDifference < 0) {
    alert('only Bran Stark may visit times passed');
    return;
  }
  alarmTimer = setTimeout(startAlarm, timeDifference);
  button.innerText = 'Cancel Alarm';
  button.setAttribute('onclick', 'cancelAlarm(this);');
};

function cancelAlarm(button) {
  clearTimeout(alarmTimer);
  button.innerText = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);')
};

function startAlarm() {
  alarmSound.play();
  document.getElementById('alarmAddOptions').style.display = '';
};

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmAddOptions').style.display = 'none';
  cancelAlarm(document.getElementById('alarmButton'));
};

function snooze() {
  stopAlarm();
  alarmTimer = setTimeout(startAlarm, 36000);
};
