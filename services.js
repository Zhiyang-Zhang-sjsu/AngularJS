let app = angular.module("app", []);

app.controller("emp", ["$scope", "calcFactory", function($scope, calcFactory) {
  $scope.a = 10;
  $scope.b = 20;

  $scope.doSum = function() {
    //$scope.sum = calcFactory.getSum($scope.a, $scope.b);
    calcFactory.getSum($scope.a, $scope.b, function(r) {
      $scope.sum = r;
    })
  }
}])

app.factory("calcFactory", ["$http", "$log", function($http, $log) {
  $log.log("Instantiating calcFactory..");

  let oCalcService = {};
  
  //Synchronous
  //oCalcService.getSum = function(a, b) {
  //  return parseInt(a) + parseInt(b);
  //};

  Asynchronous
  oCalcService.getSum = function(a, b, cb) {
    let s = parseInt(a) + parseInt(b);
    cb(s);
  };

  return oCalcService;
}])