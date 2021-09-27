let overlay = jQuery(
  '<div id="overlay"><div id="text"><span class="hours"></span><span class="minutes"></span><span class="seconds"></span><span class="ampm"></span></div></div>'
);
let timer = null;
let overlayExistence = false;

jQuery(document).ready(function () {
  timer = setTimeout(getDate, 2000);
});
jQuery(document).mousemove(function (e) {
  clearTimeout(timer);
  console.log('timout cleared');
  if (overlayExistence) {
    jQuery('#overlay').remove();
    timer = setTimeout(getDate, 2000);
    overlayExistence = false;
  } else {
    timer = setTimeout(getDate, 2000);
    overlayExistence = false;
  }
});

jQuery(document).keypress(function (e) {
  clearTimeout(timer);
  console.log('timout cleared');
  if (overlayExistence) {
    jQuery('#overlay').remove();
    timer = setTimeout(getDate, 2000);
    overlayExistence = false;
  } else {
    timer = setTimeout(getDate, 2000);
    overlayExistence = false;
  }
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
      '</div></div>'
  );
  jQuery('body').append(overlay);
}
