angular.module("SabrinaInterviewApp").controller("CategoryCtrl", function($scope, CategoryService){
  var scope = $scope;
 // getAllCategories();
  
  //get all categories from Service
  $scope.getAllCategories = function (){
		CategoryService.getAllCategories().then(function(data){
			$scope.categoriesList = data.data;
		}).catch(function (err){
			console.log("Something is wrong");
		})
	};
	
});


