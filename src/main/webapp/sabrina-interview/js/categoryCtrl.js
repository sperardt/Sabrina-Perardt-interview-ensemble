angular.module("SabrinaInterviewApp").controller("CategoryCtrl", function($scope, CategoryService){
  var scope = $scope;
  getAllCategories();
  
  //get all categories from Service
  function getAllCategories(){
		$scope.categoriesList = CategoryService.getAllCategories();
	};
	
});


