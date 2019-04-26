let hourDiv = document.getElementById('hourHand');
let minuteDiv = document.getElementById('minuteHand');
let secondDiv = document.getElementById('secondHand');

 var clockOperate = () => {   //arrow function to meet the ES6 requirement
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hourDeg = (hours + minutes / 60 + seconds / 3600) * 30;
  let minDeg = (minutes + (seconds / 60))* 6 ;
  let secDeg = seconds * 6;

  hourDiv.style.transform = "rotate(" + hourDeg + "deg)";
  minuteDiv.style.transform = "rotate(" + minDeg + "deg)";
  secondDiv.style.transform = "rotate(" + secDeg + "deg)";

};


setInterval(function () {
  clockOperate();
}, 1000)
