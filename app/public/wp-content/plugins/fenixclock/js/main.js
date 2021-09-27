/*
  On page load a timer is set to trigger creation and appending of a clock overlay to the
  page. The appearance of the clock triggers insertion of user data and clock time into a 
  database table called 'fenixclockinfo' which is created upon activating the plugin in
  the wordpress admin dashboard. Any keypress or mouse move by the user will remove the
  clock overlay from the page an reset the timer. Another timer runs every second and updates
  the clock if it's existence is true. If a user is idle for ten seconds i.e. not moving mouse or
  typing, then an overlay will appear.
 */

//variables for holding ids of setTimeout and setInterval functions.
let timer = null;
let clockTime = null;
//boolean for determining if clock exists or not.
let overlayExistence = false;

//on page load start both timers.
jQuery(document).ready(function () {
  timer = setTimeout(createOverlay, 2000);

  clockTime = setInterval(updateClock, 1000);
});

//event listener to remove overlay if user moves mouse.
jQuery(document).mousemove(function (e) {
  clearTimeout(timer);
  console.log('timout cleared');
  if (overlayExistence) {
    jQuery('#overlay').remove();
    timer = setTimeout(createOverlay, 2000);
    overlayExistence = false;
  } else {
    timer = setTimeout(createOverlay, 2000);
    overlayExistence = false;
  }
});

//event listener to remove overlay if user types.
jQuery(document).keypress(function (e) {
  clearTimeout(timer);
  console.log('timout cleared');
  if (overlayExistence) {
    jQuery('#overlay').remove();
    timer = setTimeout(createOverlay, 2000);
    overlayExistence = false;
  } else {
    timer = setTimeout(createOverlay, 2000);
    overlayExistence = false;
  }
});

//creates overlay, makes ajax call to php backend to insert current
//time data and userinfo, and appends clock overlay to page.
function createOverlay() {
  let userInfo = getUserInfo();

  //asynchronous call to enter userinfo and timestamp in database table.
  jQuery.ajax({
    url: 'wp-admin/admin-ajax.php',
    data: {
      action: 'user_info',
      user_info: userInfo,
    },
    success: (data) => {
      console.log('in the ajax call');
    },
  });

  let timeInfo = getTimeInfo();
  let { time, str, date } = timeInfo;

  //if username is there put name and email into format for HTML insertion.
  let userDeets = userInfo.userName
    ? 'You are ' +
      userInfo.userName +
      '<br>' +
      'Email: ' +
      userInfo.userEmail +
      '<br>'
    : '';

  //create overlay to add to page.
  overlay = jQuery(
    '<div id="overlay"><div id="text">' +
      `<div class="time">${time}</div>` +
      str +
      '<br>' +
      date +
      '<br>' +
      userDeets +
      '</div></div>'
  );

  //mark existence as true so clock ticking can commence.
  overlayExistence = true;

  jQuery('body').append(overlay);
}

//gets user info from the global userDetails object added in php.
function getUserInfo() {
  let userName = userDetails.current_user.data.display_name;
  let userEmail = userDetails.current_user.data.user_email;
  let info = { userEmail, userName };
  return info;
}

//controls the ticking of the clock or updates the time every second.
function updateClock() {
  if (overlayExistence) {
    let timeInfo = getTimeInfo();
    let { time } = timeInfo;
    jQuery('.time')[0].innerText = time;
  }
}

//function to get current time info.
//returns all info in an object which can be destructured
//for use by overlay and update functions.
function getTimeInfo() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let year = today.getFullYear();

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
  return { hour, minute, second, month, day, year, time, str, date };
}
