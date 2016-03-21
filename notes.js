angular js is a framework , change your way to write your application, use bulit-in features 

you do things in a certain way 

javascript framework -
allow you to create spas

your browser will load a single page -- your users not gonna know the difference 

site only loads the content it needs 


 you manage pages using partials

you are not loading different pages --loading different pieces of content 


excellent templating engine - special tags 

templates integral part of html - dont have to build separately - easier to use than special mustache js -- 

handles DOM easily 

event triggers --- data is directly bound to your template 

also works with AJAX 

MVC architecture -- 
this approach with angular 

Model - data (come from datastrucrue, db, json )
views - how are displayed - done through template 

controllers - glue that times models and views - 

core features :
directives - place in html starts with ng
data binding --- {{}} tie form elements with data 
filters -- data can be organized in a certain way 

modules --- break up functionality into modules 
routes -- heart of spa -- lets you divide your templates 

controllers 


angular js is lot more than adding basic functionality of html -- so better to put it at the top 



The number one reason for using a CDN is to improve your user's experience in terms of speed, and as we know - speed matters!

Ensuring a consistent experience for all your users is important.


angular - model view whatever -- 


Using Angular markup like {{hash}} in a src attribute doesn't work right: The browser will fetch from the URL with the literal text {{hash}} until Angular replaces the expression inside {{hash}}. The ngSrc directive solves this problem.

The buggy way to write it:

<img src="http://www.gravatar.com/avatar/{{hash}}" alt="Description"/>
The correct way to write it:

<img ng-src="http://www.gravatar.com/avatar/{{hash}}" alt="Description" />


bringing data from file -- --- use http as a service - as a file 

in traditional js - use xhr request to bring in data from json or xml -- also called ajax 

in angular js --- use service -- care of common task 
- http service -- communication between http server and application 


The $http service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.


The $http service is a function which takes a single argument — a configuration object — that is used to generate an HTTP request and returns a promise.

$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });