#generator-angular-seed

A Yeoman generator to get your Angular.js project started on the right track.

Features:
* Organizes an Angular app using a modular approach to organization
* Configures Gulp and a Gulpfile for development and build tasks
* Configures Karma + Jasmine for unit testing

### Installation
```sh
$ npm install -g generator-angular-seed
$ yo angular-seed
```
This will ask you a few questions about versions of dependencies.  If you don't want a certain dependency, just press enter to skip it.  Then,
```sh
$ npm install
$ bower install
```
### Structuring your code
The root of the Angular app is in app/scripts.  This directory also comes with one dummy module.  As you build out more modules (i.e. login, admin, etc..) make a corresponding directroy for this module in the app/scripts folder.  Put all files important to this module (LoginController.js, loginService.js, etc.) in this folder.  

### Developing
Run the Gulp process
```sh
$ gulp
```

* When adding a new file, be sure to restart the gulp process
* Templates are included in the app using the html2js utility.  Template files *must* use an .tpl.html extension to be included
* If you include a new dependency via bower, be sure to manually add any JS/CSS files you want to include in the corresponding 'vendorJs' and 'vendorStyles' arrays in 'Gulpfile.js'

### Unit Testing
It is best to place your unit tests in the same folder as the actual code you are thinking about testing.  Unit test files *must* use an .test.js extension to be included.  Gulp will watch for any changes in any .test.js files and rerun the test suite automatically.

To manually run the unit tests
```sh
$ gulp unit-test
```

### E2E testing
Test files should be placed into the /e2e directory.  Test files must be suffixed with .test.js to be picked up.  Gulp will automatically rerun the tests on change to any of these files, but if you wish to run the e2e suite manually, the task is.

```sh
$ gulp e2e-test
```

Note: Your server and dev environment must be running for e2e tests to work.


### Creating builds
A few utilities are included to create built bundles of your application.  All builds are placed in the 'build' directory.

Note: if you have app wide variables that need to vary in different environments (for example, a backend url that may be different in development than in production), put these into respective files located in the config directory. 

Creates a production bundle with all javascripts (vendor and yours) combined into 1 file and minified.  Angular app will use any config in the config/config-production.js file. 
```sh
$ gulp production
```

Same as above, except the config/config-staging.js file is used.
```sh
$ gulp staging
```

Puts all the scripts from your Angular app (not including vendor scripts) into one file, all vendor scripts into another file, and all templates into a 3rd file, all in the 'build' directory.  This task is useful if you want to create something for publishing on bower, or otherwise produce human readable distributions of your code.
```sh
$ gulp build
```





License
----

MIT



