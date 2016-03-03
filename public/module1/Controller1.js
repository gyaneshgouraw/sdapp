angular.module('ControllerModule', [])
.controller('ControllerOne',['$scope','DataBaseHelperService',function($scope, DataBaseHelperService){
	
	
	$scope.DataBaseRelatedMethods = (function(){
		$scope.insert={};
		function insertSuccess(data){
			$scope.DataBaseRelatedMethods.getAllData();
			$scope.MiscMethods.clearData();
			angular.element("#myModal").modal("show");
			$scope.insert.success=true;
		}
		function insertError(data){
			$scope.insert.success=false;
		}
		function getSuccess(data){
			document.getElementById("json").innerHTML = JSON.stringify(data.data.map(function(item){return item.data}), undefined, 2)
		}
		function getError(data){
			console.log(data);
		}
		return {
			insertData:function(){
				var data= {
					'key':$scope.key,
					'value':$scope.value
				};
				DataBaseHelperService.insert(data).then(insertSuccess,insertError);
			},
			getAllData : function(){
				DataBaseHelperService.getAllData().then(getSuccess,getError);
			}
		};
	})();

	$scope.MiscMethods = (function(){
		return {
			clearData : function(){
				$scope.key = '';
				$scope.value= '';
			}
		};
	})();


$scope.DataBaseRelatedMethods.getAllData();
}]);