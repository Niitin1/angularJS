(function (){
'use strict';
angular.module('MsgApp' ,[])
.controller('BindingController' , BindingController);
BindingController.$inject =['$scope'];
function BindingController($scope){
  $scope.firstName ="Nitin";
//  $scope.fullName = "";
  $scope.showNumberOfWatcher = function(){
    console.log("No of Watchers "+ $scope.$$watchersCount);
  };

  $scope.setFullName = function(){
    $scope.fullName = $scope.firstName +"  "+ "Singhal ";
  };
  $scope.logFirstName = function(){
    console.log("First name "+$scope.firstName);
  };
  $scope.logFullName = function(){
    console.log("Full name "+$scope.fullName);
  };
}


})();
