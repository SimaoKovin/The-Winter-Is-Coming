



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

$('#date-time').datetimepicker();
var alarmSound = new Audio();
alarmSound.src = 'GOTalarm.mp3';
var alarmTimer;

function setAlarm(button) {
  var ms = document.getElementById('date-time').value;
  var alarm = new Date(ms);
  var timeDifference = alarm.getTime() - (new Date()).getTime();

  if (timeDifference < 0) {
    alert('By The Old Gods, that Time Input is Invalid!');
    return;
  }
  alarmTimer = setTimeout(startAlarm, timeDifference + 500);
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
  alarmTimer = setTimeout(startAlarm, 300000);
};

// To Do lista



//dodavanje



function toDoList() {
  var task = document.getElementById('toDoInput').value;
  if (toDoInput.value === '') {
  alert('No such thing as empty tasks!');
  }
  else {
  var text = document.createTextNode(task);
  var newTask = document.createElement('li');
  newTask.appendChild(text);
  document.getElementById('toDolist').appendChild(newTask);
  toDoInput.value=""; // kada se zadatak doda, input se prazni
  }
  //precrtavanje
function crossOut() {
    newTask.classList.toggle("done");
  }
  newTask.addEventListener("click",crossOut);

  // individualno brisanje

  function deleteItem() {
    newTask.classList.toggle("delete");
  }
  newTask.addEventListener("dblclick",deleteItem);
} 





//brisanje

function clearItems() {
  document.getElementById('toDolist').innerHTML = "";
  
}
