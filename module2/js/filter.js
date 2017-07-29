var numArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number of array is "+numArray);

function above4value(value){
  return value >= 5;
}
var filteredArray = numArray.filter(above4value);
console.log("Filtered Array "+ filteredArray);

//For Strings
var shoppingList1 =["Milk" , "Biscuits" ,"Cookies" , "Pies" ,"Pasta" , "Eggs" ,
"Cheese" , "Butter"];
console.log("Shopping List "+ shoppingList1);

var searchValue = "Cheese";
console.log("To be searched "+searchValue);
function containsFilter(value){
console.log("Called Contains Filter method "+value + " "+searchValue);
return value.indexOf(searchValue) !== -1;
}

var searcedShoppingList = shoppingList1.filter(containsFilter);
console.log("Searced List "+searcedShoppingList);
