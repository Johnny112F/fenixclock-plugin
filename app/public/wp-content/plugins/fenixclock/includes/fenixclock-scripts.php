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
  ));
  //make site url dynamic
  function wp_get_current_url()
  {
    return home_url(site_url($_SERVER['REQUEST_URI']));
  }

  wp_localize_script('fxclock-main-script', 'siteUrl', array(
    'ajax_url' => admin_url('admin-ajax.php'),
    'nonce' => wp_create_nonce('nonce_name')
  ));
}

add_action('wp_enqueue_scripts', 'fenixclock_add_scripts');
