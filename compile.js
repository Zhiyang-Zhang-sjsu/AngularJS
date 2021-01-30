let app = angular.module("app", []);
app.controller("msg", ["$scope", function($scope) {

}])

/*app.directive("message", function($interpolate) {
  return {
    compile: function(tElement, tAttributes) {
      console.log(tAttributes.text + " -In compile..");
      tElement.css("border", "1px solid #C0C0C0");
      return {
        pre: function(scope, iElement, iAttributes, controller) {
          console.log(iAttributes.text + " -In pre..");
        },

        post: function(scope, iElement, iAttributes, controller) {
          console.log(iAttributes.text + " -In post..");
          if (iAttributes.text === "3") {
            iElement.css("border", "1px solid #FF0000");
          }

          iElement.on("click", scope.btnClick);
        }
      }
    },

    controller: function($scope, $element, $attrs) {
      let v = $interpolate($attrs.text)($scope);
      //console.log($attrs.text + " -In controller..");
      console.log(v + " -In controller..");

      $scope.btnClick = function() {
        alert(v);
      }
    },
  }
})*/

/*app.directive("message", function($interpolate) {
  return {
    link: {
      pre: function(scope, iElement, iAttributes, controller) {
        console.log(iAttributes.text + " -In pre..");
      },

      post: function(scope, iElement, iAttributes, controller) {
        console.log(iAttributes.text + " -In post..");
        if (iAttributes.text === "3") {
          iElement.css("border", "1px solid #FF0000");
        }

        iElement.on("click", scope.btnClick);
      }
    },

    controller: function($scope, $element, $attrs) {
      let v = $interpolate($attrs.text)($scope);
      //console.log($attrs.text + " -In controller..");
      console.log(v + " -In controller..");

      $scope.btnClick = function() {
        alert(v);
      }
    },
  }
})*/

/*app.directive("message", function($interpolate) {
  return {
    compile: function(tElement, tAttributes) {
      console.log(tAttributes.text + " -In compile..");
      tElement.css("border", "1px solid #C0C0C0");
      
      //post function
      return function(scope, iElement, iAttributes, controller) {
        console.log(iAttributes.text + " -In post..");
        if (iAttributes.text === "3") {
          iElement.css("border", "1px solid #FF0000");
        }

        iElement.on("click", scope.btnClick);
      }
    },

    controller: function($scope, $element, $attrs) {
      let v = $interpolate($attrs.text)($scope);
      //console.log($attrs.text + " -In controller..");
      console.log(v + " -In controller..");

      $scope.btnClick = function() {
        alert(v);
      }
    },
  }
})*/

app.directive("message", function($interpolate) {
  return function(scope, iElement, iAttributes, controller) {
    console.log(iAttributes.text + " -In post..");
    if (iAttributes.text === "3") {
      iElement.css("border", "1px solid #FF0000");
    }
  }
})