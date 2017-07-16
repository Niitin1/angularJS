(function (){
'use strict';
angular.module('MsgApp' , [])
.controller('MsgController' , MsgController);

//injection
MsgController.$inject = ['$scope'];

function MsgController($scope) {
$scope.name= "Nitin";
$scope.stateOfBeing = "env";
$scope.sayMessage = function(){
  return "Nitin likes to eat healthy pizza";
};
$scope.saveEnvironment =  function(){
$scope.stateOfBeing = "envi";

};
}


})();
