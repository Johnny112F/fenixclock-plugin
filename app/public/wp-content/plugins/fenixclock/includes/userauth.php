<?php

function redirect_user()
{
  if (!is_user_logged_in()) {

    auth_redirect();
  }
}
add_action('template_redirect', 'redirect_user');
