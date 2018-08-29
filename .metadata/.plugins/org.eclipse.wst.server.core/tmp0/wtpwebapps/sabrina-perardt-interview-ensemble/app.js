angular.module("SabrinaInterviewApp", ['ngRoute']);//, ['ngRoute', 'ui.router']
angular.module("SabrinaInterviewApp").config(function($routeProvider, $stateProvider) {
//  angular.module('demoApp', ['ngRoute']).config(['$routeProvider', function( $routeProvider) {
    $routeProvider.when("/home",{
    	 templateUrl: 'category.html',
       controller: 'CategoryCtrl'
    });

  /*  $routeProvider.when("/agendar",{
   	 templateUrl: 'views/appointment/appointment_app.html',
   	 controller: 'AppointmentCtrl',
   	 resolve:{
   		healthInsurances: function  (AppointmentService){
   			return AppointmentService.getHealthInsurances();
   		}
    }*/
    $routeProvider.otherwise({redirectTo:'/home'});
  });
