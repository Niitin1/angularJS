(function () {
'use strict';
angular.module('MsgApp' , [])
.controller('MsgController' , MsgController);

//learning to use filter service
MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope){
$scope.name = "Nitin";
$scope.stateOfBeing = "env";

$scope.sayMessage = function(){
 var msg = "Nitin eats healthy food";
 var output =$filter('uppercase')(msg);
  return output;
};
$scope.feedNitin = function(){
  $scope.stateOfBeing = "envi";
};

}

})
