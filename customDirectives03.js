let app = angular.module("app", []);
app.controller("emp", ["$scope", "empService", function($scope, empService) {
  empService.getEmployees(function(r) {
    console.log(r)
    $scope.employees = r;
  });
}]);

app.service("empService", ["$http", "$log", function($http, $log) {
  this.getEmployees = function(cb) {
    console.log("In customrized service!")
    $http({
      url: "http://localhost:8000/",
      method: "GET"
    }).then(function(resp) {
      cb(resp.data);
    }, function(resp) {
      $log.error("ERROR occurred");
    })
  }
}]);

app.directive("allEmpDetails", function() {
  return {
    templateUrl: "all-emp-details.html"
  }
});