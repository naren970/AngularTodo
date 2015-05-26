# AngularTodo
Here we have two example app's, how to use AngularJS derictives, services, controllers, modules & Dependency Injection.


<h3>1. Racers</h3>
This app will dispaly list of all the F1 reacers and I'm using one external API is to get the list of all the racers  

Here I've 
-->index.html 
I've included all the modules of AngularJS like Controller.js, Services.js & app.js files.

-->controllers.js
I've defined one moduel called "F1FeederApp.controller" and it will return the list of drivers

-->service.js
Defined a module called "F1FeederApp.services" making API call from this url http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK
and it will get json data from the API.

-->app.js
Defined a app module called "F1FeederApp" and added "F1FeederApp.controller" & "F1FeederApp.service" moduels as Dependency Injection

<h3>2. Todo</h3>

In this app I've not defined any modules I've just used the controller

-->index.html
 In this file I've included angularJS & todoApp.js file 
 and basic UI components like input textbox, checkbox, submit
 
--> todoApp.js
In this file I've define an array to store the todo items and I've defined the some methodes like addTodo(), 
toggleMarkAll(), hasDone() etc., for 

--> style.css
for Styling purpose

