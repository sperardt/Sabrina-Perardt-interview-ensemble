angular.module("SabrinaInterviewApp").controller("ProductsCtrl", function($scope, ProductsService){
  getFirstPageOfProductsByCategory("1334134");
  
  //get all categories from Service
  function getFirstPageOfProductsByCategory(categoryId){
		$scope.productsList =ProductsService.getFirstPageOfProductsByCategory(categoryId);
	};
	
	$scope.getProductDetail = function (productId){
		var itemsList = $scope.productsList.items;
		for (var i=0; i< itemsList.length; i++){
			if(itemsList[i].itemId === productId){
				console.log(itemsList[i]);
				$scope.productDetail = itemsList[i];
				return $scope.productDetail;
			}
		}
		//$scope.productDetail = $scope.productsList.items.forEach('itemId').indexOf(productId);
		//console.log($scope.productDetail);
	}
});
