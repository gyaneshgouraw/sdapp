angular.module('ServiceModule',[])
.factory('DataBaseHelperService',['$http', function($http){
	var urlPrefix = 'http://localhost:3003/api/';
	return {
		 insert: function(data){
		 	return $http.post('/api/DataCollection',data);
		},
		getAllData : function(){
			return $http.get('/api/DataCollection');
		}
	}
}]);