<?php
//adds a menu to the side admin dashboard to examine userinfo upon clicking.
function extra_post_info_menu()
{
  $page_title = 'user popup info';
  $menu_title = 'User Popup Info';
  $capability = 'manage_options';
  $menu_slug  = 'user-popup-info';
  $function   = 'user_popup_info_page';
  $icon_url   = 'dashicons-media-code';
  $position   = 4;
  add_menu_page($page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position);
}

//populates the page with database table info.
function user_popup_info_page()
{
  global $wpdb;

  // Echo the title of the first scheduled post
  // this adds the prefix which is set by the user upon instillation of wordpress
  $table_name = $wpdb->prefix . "fenixclockinfo";
  // this will get the data from your table
  $retrieved_data = $wpdb->get_results("SELECT * FROM $table_name");

  $postinfo = "Post Info";

  // Echo the title of the first scheduled post
  echo "<h1>" . $postinfo . "</h1>";
  foreach ($retrieved_data as $data) {
    echo "<h3>" . $data->id . "</h3>";
    echo "<li>" . $data->time . "</li>";
    echo "<li>" . $data->name . "</li>";
    echo "<li>" . $data->email . "</li>";
  }
}

add_action('admin_menu', 'extra_post_info_menu');
