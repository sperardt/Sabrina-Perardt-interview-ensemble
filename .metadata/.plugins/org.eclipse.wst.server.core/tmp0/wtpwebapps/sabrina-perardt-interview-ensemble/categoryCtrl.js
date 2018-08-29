/*angular.module("SabrinaInterviewApp").controller("CategoryCtrl", function($scope, CategoryService){
	$scope.header = "Sabrina Perardt - Interview - Ensemble";
	//$scope.header2 = "Um produto Floppy Technology";
	//console.log("ENTREI AQUI");
//	$scope.healthInsurances = healthInsurances;

//	console.log("convenios");
	//console.log($scope.healthInsurances.data);
  var scope = $scope;*/
	/*$scope.speciality = [];
	$scope.doctorList = [];
	$scope.pacient=[];
	$scope.anular = {};
	$scope.search = {};*/

/*
	$scope.getAllCategories = function (){
		//console.log(id);
		CategoryService.getAllCategories().then(function (data){
			$scope.categoriesList = data;
			//console.log("ROCIO medicos");
			console.log($scope.categoriesList);
		}).catch(function (err){
			console.log("deu ruim");
		});
	};
});*/

angular.module("SabrinaInterviewApp").controller("CategoryCtrl", function($scope){
	$scope.header = "Bem-vindo ao Clinidario";
	$scope.header2 = "Um produto Floppy Technology";
});
