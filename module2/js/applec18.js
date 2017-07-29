(function (){
'use strict';
var shoppingList1 =["Milk" , "Biscuits" ,"Cookies" , "Pies" ,"Pasta" , "Eggs" ,
"Cheese" , "Butter"];

angular.module("MsgApp",[])
.controller("NgFilterController" , NgFilterController);
NgFilterController.$inject = ["$scope"];
function NgFilterController($scope){
$scope.shoppingList1 = shoppingList1;
// $scope.shoppingList2 = shoppingList2;
// $scope.addToList = function(){
// var newItem ={
//  name : $scope.newItemName,
//  quantity : $scope.newItemQuantity
// };
// $scope.shoppingList2.push(newItem);
// };
}

})();
