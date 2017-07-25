(function (){

'use strict ';
angular.module('CounterApp' ,[])
.controller('CounterController' ,CounterController);

CounterController.$inject =['$scope'];
console.log("Calling ");
function CounterController($scope){
  console.log("Call Fun");
  $scope.onceCounter =0;
  $scope.counter =0;
  $scope.showWatcher = function(){
    console.log("No of watcher "+$scope.$$watchersCount);
  };
$scope.countOnce = function(){
  $scope.onceCounter =1;
};

$scope.upCounter = function(){
  $scope.counter++;
};
//special function watch takes two properties,  first property we want to watch
$scope.$watch('onceCounter' , function(newValue, oldValue){
  console.log("old value "+ oldValue + " new Value  "+ newValue);

});

$scope.$watch('counter' , function(newValue, oldValue){
  console.log("old values "+ oldValue + " new Values  "+ newValue);

});
}
})();
