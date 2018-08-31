angular.module("SabrinaInterviewApp").controller("ProductsCtrl", function($scope, $routeParams, ProductsService){
  
  //get all categories from Service
  $scope.getFirstPageOfProductsByCategory = function (categoryId){
	  	$scope.categoryId = categoryId;
		ProductsService.getFirstPageOfProductsByCategory(categoryId).then(function(data){
			$scope.productsList = data.data.items;
		}).catch(function (err){
			console.log("Something is wrong");
		})
	};
	
	//get product detail using an id
	$scope.getProductDetail = function (productId){
		ProductsService.getFirstPageOfProductsByCategory($routeParams.categoryId).then(function(data){
			var itemsList = data.data.items;
			for (var i=0; i< itemsList.length; i++){
				if(itemsList[i].itemId === parseInt(productId)){
					$scope.productDetail = itemsList[i];
					return $scope.productDetail;
				}
			}
			
		}).catch(function (err){
			console.log("Something is wrong");
		})
	}
	
	$scope.getFirstPageOfProductsByCategory($routeParams.idCategory);
	
	if ($routeParams && $routeParams.idProduct){
		$scope.getProductDetail($routeParams.idProduct);
	  }
});
