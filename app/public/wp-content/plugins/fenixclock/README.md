# Fenixclock Plugin

Fenixclock is a wordpress plugin which when activated will show a
clock overlay with the current logged in user's username and email
beneath a ticking clock that is updated every second in realtime. This overlay will
appear after ten seconds if a user is idle and does not move their mouse or type while
in the page. Upon the appearance of the overlay the user's info along with the current time
in GMT will be entered into a table called 'fenixclockinfo', which is accessible through
adminer in Local. There will also be a page accessible through a new side menu tab called
"User Popup Info", which displays each row of the database in ascending order with time, username, and email
on bulletpointed lines.

There are many potential points for improvement on this plugin, and I had included other
issues I am working on in the TODOS section of this README file.

## Installation

- Git clone this repo and copy the fenix-plugin into the plugins folder of your wordpress site.

- You can also open a zipped file of this plugin and then insert the fenix-plugin folder into the plugins
  folder of your project.

-The plugin should now be accessible in the plugins section of the admin bar.

-Navigate to the plugin and click 'activate'.

-Upon activation a database table will be created called 'fenixclockplugin'. It will be
populated by default with one fake user. If you wish for a blank table remove the 'jal_install_data' function
from 'dbfunctions.php' in the includes folder.

-After activating the plugin an overlay will show on your wordpress site every ten seconds. If you would like to see this
overlay sooner go into the 'main.js' file in the js folder and change 10000 to something like 1000 or 2000 and save.

-If you would like to clear the database table created with the plugin at this point in time you must open the adminer tool
and drop the table 'fenixclockinfo' then deactivate and reactive the plugin to recreate the table.

-If you would like to view table info related to this plugin's behavior you can see the current table entries by clicking on
the User Popup Info tab on the admin side menu. This tab should show immediately after activating the plugin.

## Usage

-Upon activation a database table will be created called 'fenixclockplugin'. It will be
populated by default with one fake user. If you wish for a blank table remove the 'jal_install_data' function
from 'dbfunctions.php' in the includes folder and any functions referencing it elsewhere..

-After activating the plugin an overlay will show on your wordpress site every ten seconds. If you would like to see this
overlay sooner go into the 'main.js' file in the js folder and change 10000 to something like 1000 or 2000 and save.

-If you would like to clear the database table created with the plugin at this point in time you must open the adminer tool
and drop the table 'fenixclockinfo' then deactivate and reactive the plugin to recreate the table.

-If you would like to view table info related to this plugin's behavior you can see the current table entries by clicking on
the User Popup Info tab on the admin side menu. This tab should show immediately after activating the plugin.

##DEMONSTRATION

Here is a short demo video of activating the plugin and exploring and it's functionality and features.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/50811190/134975083-55097506-5b6f-4981-b3ef-013baa06bd0a.gif)



## TODOS

-Make User Info Popup page have a clean interface with buttons to show specific info in the table such as only showing users,
times, or emails. Also, add buttons or options to order data and show in a clean presentation within this admin page.

-Sanitize SQL input so that sql injection is an impossibility if the site is deployed. At this time for
testing the site in local development this is not necessary but should absolutely be done if this plugin were
to be used on a fully deployed site.

-It would be nice to add a way for admin to adjust time of the overlays appearance and also potentially to choose whether they
would like to keep the functionality of removing the overlay on user movements or to add an option for adding a button a user
must click to make the overlay dissapear. Currently the functionality of the overlay with event listeners seems alright but there may
be room for improvement by attaching the listeners in another fashion.

-Add more CSS styling to the overlay.

-Put AJAX call in jQuery into a seperate function to improve readability and make it so each function handles one concern.
Currently, the creation of the overlay also handles the insertion of data into the table on the backend.

-Add testing for frontend and backend i.e. unit tests, integrations tests, end to end....


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

Pending...
