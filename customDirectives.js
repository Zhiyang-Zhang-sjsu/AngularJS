let app = angular.module("app", []);

app.controller("emp", ["$scope", function($scope) {
  $scope.msg = "This is sencond Message"
}]);

app.directive("myInfoMsg", function() {
  return {
    templateUrl: "my-info-msg.html"
  };
});