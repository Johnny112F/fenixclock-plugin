let overlay = jQuery(
  '<div id="overlay"><div id="text"><span class="hours"></span><span class="minutes"></span><span class="seconds"></span><span class="ampm"></span></div></div>'
);
let timer = null;
let overlayExistence = false;

jQuery(document).ready(function () {
  timer = setTimeout(getDate, 2000);
  // let clockInfo = createClockTime();
  // let display = createClockDisplay(clockInfo);
  // jQuery('body').append(overlay);
  // startTicking();
});

function getDate() {
  console.log('here');
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let year = today.getFullYear();
  overlayExistence = true;
  if (hour < 12) {
    timeOfDay = 'AM';
  } else {
    timeOfDay = 'PM';
  }
  if (hour == 0) {
    hour = 12;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  let userDeets = userName ? '<br>' + userName + '<br>' + userEmail : '';

  let time = hour + ':' + minute + ':' + second + ' ' + timeOfDay;
  let str = 'Today is';
  let date = month + '/' + day + '/' + year;

  overlay = jQuery(
    '<div id="overlay"><div id="text">' +
      time +
      '<br><br>' +
      str +
      '<br>' +
      date +
      '<br>' +
      userDeets +
      '</div></div>'
  );
  jQuery('body').append(overlay);
}
