angular.module('appRoutes', []).config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'ControllerOne', 
      templateUrl: 'module1/View1.html' 
    }) 

    .when('/module1', {
		 controller: 'ControllerOne', 
     	 templateUrl: 'module1/View1.html' 
		})

    .otherwise({ 
      redirectTo: '/' 
    }); 
});