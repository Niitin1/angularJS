(function (){
'use strict';


var shoppingList1 =["Milk" , "Biscuits" ,"Cookies" , "Pies" ,"Pasta" , "Eggs" ,
"Cheese" , "Butter"];

var shoppingList2 =[
{
name : "Milk",
quantity : "2",

},
{
name : "Biscuits",
quantity : "5",

},
{
name : "Cookies",
quantity : "20",

},
{
name : "Pies",
quantity : "10",
}
// },
// {
// name : "Pasta",
// quantity : "5",
//
// },
// {
// name : "Eggs",
// quantity : "12",
//
// },
// {
// name : "Cheese",
// quantity : "250",
//
// },
// {
// name : "Butter",
// quantity : "500",
//
// },

]
 angular.module("ShoppingListApp" ,[])
 .controller('ShoppingListController' , ShoppingListController);
 ShoppingListController.$inject = ['$scope'];
 function ShoppingListController($scope){
$scope.shoppingList1 = shoppingList1;
$scope.shoppingList2 = shoppingList2;
$scope.addToList = function(){
var newItem ={
  name : $scope.newItemName,
  quantity : $scope.newItemQuantity
};
$scope.shoppingList2.push(newItem);
 };
}
})();
