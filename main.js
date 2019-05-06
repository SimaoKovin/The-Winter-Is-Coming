// div-ovi kazaljki
let hourDiv = document.getElementById('hourHand');
let minuteDiv = document.getElementById('minuteHand');
let secondDiv = document.getElementById('secondHand');
//arrow funkicja da bi smo zadovoljili ES6 kriterijum
var clockOperate = () => {   
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
//Jquery datetimepicker koji je neophodan da bi input proradio u Mozilla Firefox-u 
$('#date-time').datetimepicker();
//mp3 fajl alarma
var alarmSound = new Audio('GOTalarm.mp3');
var alarmTimer;
// funckija alarma, najpre hvatamo input date-time-a
function setAlarm(button) {
  var ms = document.getElementById('date-time').value;
  //provera da li je polje prazno
if (ms === '') {
  alert('Enter a date, if you would');
} else {
//pretvaranje vrednosti unete u date-time input u format datuma
  var alarm = new Date(ms);
  var timeDifference = alarm.getTime() - (new Date()).getTime();
  if (timeDifference < 0) {
    alert('By The Old Gods, that Time Input is Invalid!');
    return;
  }
  //najvažniji segment funkcije: timeout pušta alarm za vreme koje predstavlja razliku unetog i trenutnog vremena, 500 milisekundi je tu jer pesma ima malo odložen početak
  alarmTimer = setTimeout(startAlarm, timeDifference + 500);
  // kada je alarm u funkciji, tekst dugmeta start alarm se menja u cancel alarm
  button.innerText = 'Cancel Alarm';
  button.setAttribute('onclick', 'cancelAlarm(this);');
}
};
//otkazivanjem alarma, tekst dugmeta se vraća u prvobitno stanje
function cancelAlarm(button) {
  clearTimeout(alarmTimer);
  button.innerText = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);')
};
// puštanje zvuka, i snooze i stop dugmad postaju vidljiva
function startAlarm() {
  alarmSound.play();
  document.getElementById('alarmAddOptions').style.display = '';
};
// stopiranje alarma
function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmAddOptions').style.display = 'none';
  cancelAlarm(document.getElementById('alarmButton'));
};
// snooze je samo ponovno puštanje alarma kroz 30k milisekundi (5 minuta)
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
    // kreiranje tekstualnog segmenta, list elementa, i appendovanje tekstualne vrednosti unete u input u kreirani list element
  var text = document.createTextNode(task);
  var newTask = document.createElement('li');
  newTask.appendChild(text);
  document.getElementById('toDolist').appendChild(newTask);
   // kada se zadatak doda, input se prazni
  toDoInput.value="";
  }
  //precrtavanje, u CSS-u kreirana klasa koja ukrašava tekst na koji se primeni svojstvom "line-through"
function crossOut() {
    newTask.classList.toggle("done");
  }
  // precrtavanje se dešava na 1 click miša
  newTask.addEventListener("click",crossOut);
  // individualno brisanje, u CSS-u kreirana klasa koja dodaje svojstvo elementu na koji je primenjena "display: none"
  function deleteItem() {
    newTask.classList.toggle("delete");
  }
  // individualno brisanje se dešava na dupli click miša
  newTask.addEventListener("dblclick",deleteItem);
} 
//brisanje
function clearItems() {
  document.getElementById('toDolist').innerHTML = "";
}
