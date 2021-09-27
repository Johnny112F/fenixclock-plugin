<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'LMgUxznQmmI09AUkRIgcCYylarftYSIG1Vn5qeFqYtVphZiL+IB/Q2KtaHVeQ640kFJh78FNg82g/DZZzq+PpA==');
define('SECURE_AUTH_KEY',  'hk37jp7Cu7G0go1sRE+Vn1WDtXylO9PEtrrxwxS7hJ/o5K2ol82cFC/Zb8k8Z8YfsQQjBjVvvfLavEV6cU031g==');
define('LOGGED_IN_KEY',    'l5orsMQhadXq+peOlBOoPF1I5OUkKvO63CJBVeidNk71/JC2/M9JqGNkX6L5xnuy7YO8sy0l6Auhr+/3FLaZVQ==');
define('NONCE_KEY',        'k3YD3xRruBAAGZiDHakaSuI8uVMKX3eYL14tecr6cPMoAyUdQaEouo9LIxX5jMrow7EY8o0EZ2eogvQa5M5yfQ==');
define('AUTH_SALT',        'Iw7hEq9Qj4mRDotUdv9eeS1Zo/RjF9wsOw/Ye7IIdPUVVug+qXZfwxY6iFoibqBpt6eGIJA7VCiCNczfpWErPw==');
define('SECURE_AUTH_SALT', 'apiy+Q4rQeTM9UZshFikan6hMEmGK7WjELMyScCqwIaPHCEePcmjQKrbKIk0Tt/VreIzIwRTjmcBT+pJTv+vEA==');
define('LOGGED_IN_SALT',   '7kr7zz91B1FqLFOEtHVgxRB7CnsO8xiibe1ZxIUIoC6tWaQLWEdQjlIs5uPaX32yT8K3IgybHSTwgzneX13vsw==');
define('NONCE_SALT',       '9VGECx5AC5hg/YLZBuj8WMDq/MXRvBOOqEQa8uC0Xc5lm58YtAd73+rTJLC3U86iORH4wEbv8luHbGmFbRAu9w==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
