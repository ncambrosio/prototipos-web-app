'use strict';

var App = angular.module('myApp',[]);

var env = {};

//Import variables if present (from env.js)
if(window){  
	Object.assign(env, window.__env);
}

//Register environment in AngularJS as constant
App.constant('appEnvConfig', env);