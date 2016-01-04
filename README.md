<h1> ng-create </h1>
A script to create Angular directives, states, filters of services(factories) in the current directory.<br>
Why?<br>
Because I am tired of constantly having to rewrite the same boilerplate code for these things and make their directories and files everytime I want to make a new state, directive, service, or filter in Angular.

Steps to use ng-create:
<ol>
  <li> Make sure node is installed. </li>
  <li> Make sure you have npm installed babel-cli and babel-preset-es2015. </li>
  <li> Clone this repo. </li>
  <li>
  In the directory where you cloned this repo run:<br>
  babel --presets es2015 ng-create_es6.js --out-file ngcreate
  </li>
  <li> Export the generated ngcreate file to your systems PATH </li>
  <li> Use with delight! </li>
</ol>

The script is used with the following syntax:<br>
  ngcreate naAppName directive|service|filter|state name

Where:<br>
The first argument is the name of the angular app in the ng-app directive.
The second argument is either directive, service, filter, or state. Specifying what kind of Angular component you are creating.
The third argument is the name of the component. This will be used for directory names, file names, and the angular name of the component itself.

Examples:<br>
ngcreate myEx directive myDir<br>
Creates in the current directory a directory called myDir. In the myDir directory two files are made, a myDir.template.html file and a myDir.directive.js file. In the directive file the name of the directive is 'myDir'. 'myEx' is the name of your angular module/app.

ngcreate myEx state login<br>
Creates in the current directory a directory called login. In the login directory two files are made, a login.html file and a login.controller.js file. In the controller file the name of the controller is 'LoginCtrl'.

ngcreate myEx filter time<br>
Creates in the current directory a file named time.filter.js. In the file the name of the filter is 'time'.

ngcreate myEx service user<br>
Create in the current directory a file named user.service.js. In the file an Angular factory is made and the name of that factory is 'User'.
