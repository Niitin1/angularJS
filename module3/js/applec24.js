(function (){
'use strict';
angular.module("ShoppingListPromiseApi" ,[])
.controller("ShoppingListController",ShoppingListController)
.service("ShoppingListService" ,ShoppingListService)
.service("WeightLossFilterService",WeightLossFilterService);

ShoppingListController.$inject =["ShoppingListService"];
function ShoppingListController(ShoppingListService){
  var list = this;
  list.items =ShoppingListService.getItems();
  list.itemName="";
  list.itemQuantity = "";
  console.log("Press add item "+list.itemName + " ->  "+list.itemQuantity);
  list.addItem = function(){
    ShoppingListService.addItem(list.itemName, list.itemQuantity);
  };
  list.removeItem = function(itemIndex){
    ShoppingListService.removeItem(itemIndex);
  };
}

ShoppingListService.$inject =['$q', 'WeightLossFilterService'];
function ShoppingListService($q, WeightLossFilterService){
  var service = this;

  //List of Shopping items
  var items =[];
  service.addItem =function(name,quantity){
    console.log(name);
    var promise = WeightLossFilterService.checkName(name);
    promise.then(function (response){
      var nextPromise = WeightLossFilterService.checkQuantity(quantity);
      nextPromise.then(function (result){
        var item ={
          name: name,
          quantity: quantity
        };
        items.push(item);
      }, function (errorResponse){
        console.log(errorResponse.message);
      });
    }, function (errorResponse){
      console.log(errorResponse.message);
    });
  };
  service.removeItem = function (itemIndex){
    items.splice(itemIndex,1);
};
console.log("Returning items ");
    service.getItems = function(){
      return items;
    };
  }

WeightLossFilterService.$inject =['$q', '$timeout'];
function WeightLossFilterService($q, $timeout){
  var service = this;

  service.checkName = function(name){
    var deferred = $q.defer();
    var result ={
      message:""
    };

console.log("Name and quantity "+name + "  ");
    $timeout(function () {
      // Check for cookies
      if (name.toLowerCase().indexOf('cookie') === -1) {
        deferred.resolve(result)
      }
      else {
        result.message = "Stay away from cookies!";
        deferred.reject(result);
      }
    }, 3000);

    return deferred.promise;
  };


  service.checkQuantity = function(quantity){
    console.log("Q " +quantity);
    var deferred = $q.defer();
    var result ={
      message:""
    };
    $timeout(function (){
      if(quantity < 6){
        deferred.resolve(result)
      }  else {
          result.message = "Its too much";
          deferred.reject(result);
        }
      }, 3000);
    return deferred.promise;
  };

}
})();
