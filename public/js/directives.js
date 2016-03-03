angular.module('DirectiveModule', [])
.directive('myTest', function(){

	 return {
        template : "<h1>Custom Directive made!!</h1>"
    };
});