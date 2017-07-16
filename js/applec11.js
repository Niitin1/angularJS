(function (){
'use strict';
angular.module('MsgApp' , [])
.controller('MsgController' , MsgController);

//injection
MsgController.$inject = ['$scope'];

function MsgController($scope) {
$scope.name= "Nitin";
$scope.sayMessage = function(){
  return "Nitin likes to eat healthy pizza";
};
}


})();
