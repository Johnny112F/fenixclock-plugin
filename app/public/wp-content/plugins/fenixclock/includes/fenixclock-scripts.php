<?php
// Add Scripts
function fenixclock_add_scripts()
{
  // Add Main CSS
  wp_enqueue_style('fxclock-main-style', plugins_url() . '/fenixclock/css/style.css');
  // Add Main JS
  wp_enqueue_script('fxclock-main-script', plugins_url() . '/fenixclock/js/main.js', array('jquery'), null, true);

  wp_localize_script('fxclock-main-script', 'userDetails', array(
    'current_user' => wp_get_current_user()
    
  //make site url dynamic
  ));
}

add_action('wp_enqueue_scripts', 'fenixclock_add_scripts');
