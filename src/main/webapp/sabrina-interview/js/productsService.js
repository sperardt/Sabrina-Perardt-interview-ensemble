angular.module('SabrinaInterviewApp').factory('ProductsService', function($http, $q){
    var WALMART_API_URI = 'http://api.walmartlabs.com/v1/';
    var API_KEY = "shs3n5x4fn4qsev9nbatkmsy";
    
    
    var factory = {
    		getFirstPageOfProductsByCategory:getFirstPageOfProductsByCategory
    };

    return factory;

    function getFirstPageOfProductsByCategory(id){
    	return $http.get(WALMART_API_URI+'paginated/items?category=' + id + '&count=10' + '&apiKey=' + API_KEY + '&format=json');
    }
});