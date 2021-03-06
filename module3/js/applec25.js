(function (){
'use strict';

//in directive we use camelForma
angular.module("ControllerAsApp" ,[])
.controller("ShoppingListController1" , ShoppingListController1)
.controller("ShoppingListController2" , ShoppingListController2)
.factory("ShoppingListFactory",ShoppingListFactory)
.directive("listItemDescription",ListItemDescription)
.directive("listItem" , ListItem);

function ListItem(){
  var ddo ={
      restrict:"AE",
      templateUrl:"../html/listItem.html",

    // scope :{
    //   list: '<',
    //   title : '@'
    // },
    // controller: ShoppingListDirectiveController,
    // controllerAs:"list1",
    // bindToController:true
  };
  return ddo;
}

function ShoppingListDirectiveController() {
  var list=this;
  list.cookieInList = function(){
    for (var i=0; i<list.items.length; i++){
      var name= list.items[i].name;
      if(name.toLowerCase().indexOf("cookie")!==-1){
        return true;
      }
    }
    return false;
  };

}

function ListItemDescription(){
  var ddo ={
    template:'  {{item.quantity}} of {{item.name}}'
  };
  return ddo;
}

//List 1 controller
ShoppingListController1.$inject=["ShoppingListFactory"];
function ShoppingListController1(ShoppingListFactory){
var list1 = this;
//use factory to create new shopping list

var shoppingList = ShoppingListFactory();
list1.items = shoppingList.getItems();
var origTitle = "Shopping List #1";
list1.title = origTitle +" ( "+list1.items.length + " items)" ;

list1.itemName = "";
list1.itemQuantity = "";
list1.addItem = function(){
  shoppingList.addItem(list1.itemName, list1.itemQuantity);
  list1.title = origTitle +" ( "+list1.items.length + " items)" ;
  list1.itemName = "";
  list1.itemQuantity="";
}
list1.removeItem = function(itemIndex){
  shoppingList.removeItem(itemIndex);
  list1.title = origTitle +" ( "+list1.items.length + " items)" ;
};
}

//List 2 controller
ShoppingListController2.$inject=["ShoppingListFactory"];
function ShoppingListController2(ShoppingListFactory){
var list2 = this;
//use factory to create new shopping list

var shoppingList = ShoppingListFactory(3);
list2.items = shoppingList.getItems();
list2.itemName = "";
list2.itemQuantity = "";
list2.addItem = function(){
  try{
  shoppingList.addItem(list2.itemName, list2.itemQuantity);
  list1.itemName = "";
  list1.itemQuantity="";
}catch(error){
  list2.errorMessage = error.message;
}
}
list2.removeItem = function(itemIndex){
  shoppingList.removeItem(itemIndex);
};
}

//If  not specified, max items assumed unlimited

function ShoppingListService(maxItems){
  var service = this;

  //List of shopping items
  var items = [];

  service.addItem = function(itemName, quantity){
    if((maxItems === undefined) || (maxItems!== undefined)
  && (items.length < maxItems)){
    var item ={
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  }
  else{
    throw new Error("Max items(" + maxItems+ ") reached");
  }
};
service.removeItem = function(itemIndex){
  items.splice(itemIndex,1);
};
service.getItems = function(){
  return items;
};
}
function ShoppingListFactory(){
  var factory = function(maxItems){
    return new ShoppingListService(maxItems);
  };
  return factory;
}

})();
