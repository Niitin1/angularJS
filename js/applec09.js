(function () {
  'use strict';
  angular.module('DIApp',[])
  .controller('DIController', DIController);

  // in angular everything starts with $, refer as service
  function DIController($scope, $filter
                        ,$injector){
    $scope.name="Nitin";

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scop.name = upCase($scope.name);
    };
    console.log($injector.annotate(DIController));
  }
  function Annotate(name, job , blah){
    return "Blah";
  }
  console.log(Annotate());
  console.log(Annotate);
  console.log("Controller "+ DIController.toString());
})();
