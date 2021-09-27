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
  let userInfo = getUserInfo();
  jQuery.ajax({
    url: 'wp-admin/admin-ajax.php',
    data: {
      action: 'user_info',
      "user_info": userInfo,
    },
    success: (data) => {
      console.log('in the ajax call');
    },
  });
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
  //if username is there put name and email into format for HTML insertion.
  let userDeets = userInfo.userName
    ? userInfo.userName + '<br>' + userInfo.userEmail + '<br>'
    : '';

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
//gets user info from the global userDetails object
function getUserInfo() {
  let userName = userDetails.current_user.data.display_name;
  let userEmail = userDetails.current_user.data.user_email;
  let info = { userEmail, userName };
  return info;
}
