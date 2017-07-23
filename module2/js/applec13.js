(function () {
'use strict';
angular.module("MsgApp", [])
.controller("MsgController" , MsgController)
.filter("less" , customFactoryFilter);

//here we inject lessFilter, where "less" comes from above staatement as the filter name while "Filter" is/will  append by angular js
MsgController.$inject=['$scope' , 'lessFilter'];
function MsgController($scope, lessFilter){
$scope.stateOfBeing = "env";
$scope.sayMsg = function(){
  var msg = "Eating less food";
  return msg;
};
$scope.sayLessMsg = function(){
  var msg = "Eating less food";
  msg = lessFilter(msg);
  return msg;
};
$scope.feedNitin = function(){
$scope.stateOfBeing="envi";
};
}
// Factory method
function customFactoryFilter() {
  console.log("Called custom Factory Method");
return function (input) {
  input = input || "";
  input = input.replace("less" ,"more");
  return input;
};
}
})();
