angular.module("SabrinaInterviewApp", ['ngRoute', 'ui.router']);
angular.module("SabrinaInterviewApp").config(function($routeProvider, $stateProvider) {
    $routeProvider.when("/home",{
    	 templateUrl: 'sabrina-interview/views/initialMenu.html'
    });
    
    $routeProvider.when("/allCategories",{
   	 templateUrl: 'sabrina-interview/views/allCategories.html',
   	 controller: 'CategoryCtrl'
    });
    
    $routeProvider.when("/productsByCategory/:idCategory",{
     	 templateUrl: 'sabrina-interview/views/productsByCategory.html',
     	 controller: 'ProductsCtrl'
      });
    
    $routeProvider.when("/productDetail/:idProduct/:categoryId",{
      	 templateUrl: 'sabrina-interview/views/productDetail.html',
      	 controller: 'ProductsCtrl' 	 
    });
    
    $routeProvider.otherwise({redirectTo:'/home'});
});
