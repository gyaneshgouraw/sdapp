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
			document.getElementById("output").innerHTML = "";
			for(var i = 0; i < data.data.length;i++){
				var newDiv = document.createElement(Object.keys(data.data[i].data).join()); 
				var newContent = document.createTextNode(data.data[i].data[Object.keys(data.data[i].data).join()]); 
				newDiv.appendChild(newContent); //add the text node to the newly created div.
				newDiv.appendChild(document.createElement("hr")); 
				// add the newly created element and its content into the DOM 
				var currentDiv = document.getElementById("output"); 
				currentDiv.appendChild(newDiv);
			}
		  

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