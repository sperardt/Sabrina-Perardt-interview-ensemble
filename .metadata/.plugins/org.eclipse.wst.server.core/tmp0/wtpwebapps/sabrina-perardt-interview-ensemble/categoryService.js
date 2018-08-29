angular.module('SabrinaInterviewApp').factory('CategoryService', function($http, $q){
//	['$http', '$q',
    var WALMART_API_URI = 'http://api.walmartlabs.com/v1/';
    var API_KEY = "shs3n5x4fn4qsev9nbatkmsy";

    var factory = {
    		getAllCategories:getAllCategories
    };

    return factory;

    function getAllCategories(){
    		return $http.get(WALMART_API_URI +"taxonomy?apiKey=" + API_KEY + "&format=json");
    }
});
