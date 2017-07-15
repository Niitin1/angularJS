(function () {
//  'use strict';
// angular.module('myFirstApp', [])
// .controller('MyFirstController', function ($scope) {
//   $scope.name ="Nitin";
//   $scope.sayHello = function(){
//     return "Hello Coursera "
//   }
//
// })

angular.module('NameCalculator' , [])
.controller('NameCalculateCalculator' , function($scope){
$scope.name ="";
$scope.totalValue =0;
$scope.displayNumeric = function () {
  var totalNameValue = calculateNumericForString($scope.name);
  $scope.totalValue = totalNameValue;
};
function calculateNumericForString(string) {
  var totalStringValue = 0;
  for(var i =0; i< string.length; i++){
    totalStringValue += string.charCodeAt(i);
  }
  return totalStringValue;
}
});
})();
