// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var BAR = document.getElementById('iBar');

setTimeout(function () {});
var STARTTIMER = 3500;
var CLOSETIMER = 3500;
var STPS = 1;
var TIMER = setInterval(function () {
  CLOSETIMER = CLOSETIMER - 100;
  //console.log(STARTTIMER / CLOSETIMER);
  let minus = CLOSETIMER / STARTTIMER;
  let percen = 100 - minus * 100;
  console.log(percen);
  STPS++;
  //if (CLOSETIMER < 0 || CLOSETIMER > 100) clearInterval(TIMER);
  if (percen > 100) clearInterval(TIMER);
  if (percen < 100) BAR.style.width = percen + '%';
}, 100);
