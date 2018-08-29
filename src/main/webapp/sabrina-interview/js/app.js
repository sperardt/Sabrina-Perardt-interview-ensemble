angular.module("SabrinaInterviewApp", ['ngRoute', 'ui.router']);
angular.module("SabrinaInterviewApp").config(function($routeProvider, $stateProvider) {
  /*  $routeProvider.when("/home",{
    	 templateUrl: 'views/allCategories.html'//,
    	// controller: 'CategoryCtrl'
    });
    
    $routeProvider.when("/allCategories",{
   	 templateUrl: 'views/allCategories.html',//'views/allCategories.html',
   	 controller: 'CategoryCtrl'*///,
   	// resolve:{
   	//	allCategories: function  (CategoryService){
   	//		return CategoryService.getAllCategories();
   	//	}
   	// }
   // });
   
   
    
 //   $routeProvider.otherwise({redirectTo:'/home'});
//    $urlRouterProvider.otherwise('/home');
//    
//    $stateProvider
//        
//        // HOME STATES AND NESTED VIEWS ========================================
//        .state('home', {
//            url: '/home',
//            templateUrl: '../hello.html',
//            controller: SearchForAppointmentCtrl
//        })
//        
//        // nested list with custom controller
//        .state('home.list', {
//            url: '/list',
//            templateUrl: 'partial-home-list.html',
//            controller: function($scope) {
//                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
//            }
//        })
//        
//        // nested list with just some random string data
//        .state('home.paragraph', {
//            url: '/paragraph',
//            template: 'I could sure use a drink right now.'
//        })
//        
//        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
//        .state('about', {
//            url: '/about',
//            views: {
//                '': { templateUrl: 'partial-about.html' },
//                'columnOne@about': { template: 'Look I am a column!' },
//                'columnTwo@about': { 
//                    templateUrl: 'table-data.html',
//                    controller: 'scotchController'
//                }
//            }
//            
//        });
        
});



