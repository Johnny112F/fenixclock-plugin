<?php

global $jal_db_version;
$jal_db_version = '1.0';

function jal_install()
{
  global $wpdb;
  global $jal_db_version;

  $table_name = $wpdb->prefix . 'fenixclockinfo';

  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		time datetime DEFAULT '0000-00-00 00:00:00',
		name tinytext NOT NULL,
		email text NOT NULL,
    PRIMARY KEY (id)
		
	) $charset_collate;";

  require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
  dbDelta($sql);

  add_option('jal_db_version', $jal_db_version);
}

function jal_install_data()
{
  global $wpdb;

  $user_name = 'Lola Malloy';
  $user_email = 'lola@wordpress.com';

  $table_name = $wpdb->prefix . 'fenixclockinfo';

  $wpdb->insert(
    $table_name,
    array(
      'time' => current_time('mysql'),
      'name' => $user_name,
      'email' => $user_email,
    )
  );
}

function insert_userinfo()
{
  global $wpdb;
  if (isset($_REQUEST)) {
    $userinfo = $_REQUEST['user_info'];
    header('Content-Type: application/json; charset=utf-8');

    $table_name = $wpdb->prefix . 'fenixclockinfo';

    $wpdb->insert(
      $table_name,
      array(
        'time' => current_time('mysql', 'UTC'),
        'email' => $userinfo['userEmail'],
        'name' => $userinfo['userName']

      )
    );
  }
  die();
}

add_action('wp_ajax_user_info', 'insert_userinfo');
