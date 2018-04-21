# 4xx

https://4xx.yepezdesigns.com

inside out project version 400.0
-added base code to index.html and added initial JavaScript to app.js page

inside out project version 401.0
-created the appData object
-moved the title and tag line variables into appData
-refactored the initializeApplication function

inside out project version 401.1
-added bootstrap to the index.html
-added a DOM injection of the progressbar in the app.js
-created the displayPB function in the app.js

inside out project version 402.0
-added style.css and linked in index.html
-added login form function and call after progress bar is completed
-added minimal validateLogin function to check for blank strings 

inside out project version 403.0
-index.html
	-updated all hrefs/links to passive protocol
	-moved style sheet link below animate and bootstrap to allow for custom styles to override all
-style.css
	-added styles for application interface - sidebar, wrapper, navigation, etc.
-app.js
	-added the applicationUserInterface function which defines the application user interface
	-added the buildMenu function which returns the navigation menu and will increase in dynamic navigation building
	-added the buildMain function which returns the primary content area and will evolve to return content dynamically
	-replaced document write with call to applicationUserInterface function in the validateLogin function
	-added the linkClicked function which is called by click events on anchor elements and returns dynamically driven results
