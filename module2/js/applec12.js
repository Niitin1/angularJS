(function () {
'use strict';
angular.module('MsgApp' , [])
.controller('MsgController' , MsgController);

//learning to use filter service
MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope , $filter){
$scope.name = "Nitin";
$scope.stateOfBeing = "env";
$scope.cookieCost = .45;

$scope.sayMessage = function(){
 var msg = "Nitin eats healthy food";
 var output =$filter('uppercase')(msg);
 console.log(msg);
  return output;
};
$scope.feedNitin = function(){
  $scope.stateOfBeing = "envi";
};
}
})();
