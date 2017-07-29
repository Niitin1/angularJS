// var parent = {
// value :"parentValue",
// obj:{
// objValue: "parentObjValue"
// },
// walk: function(){
//   console.log("Walking ");
// }
// };
// var child = Object.create(parent);
// console.log("CHILD - child.value : "+ child.value);
// console.log("CHILD - child.obj.objValue: "+child.obj.objValue);
// console.log("PARENT -parent.value: " + parent.value);
// console.log("PARENT - parent.obj.objValue: "+parent.obj.objValue);
// console.log("parent : "+parent);
// console.log("child: "+ child);
//
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** Changed: child.value = 'childValue' ");
// console.log("*** Changed : child.obj.objValue='childObjValue'");
// console.log("CHILD - child.value : "+ child.value);
// console.log("CHILD - child.obj.objValue: "+child.obj.objValue);
// console.log("PARENT -parent.value: " + parent.value);
// console.log("PARENT - parent.obj.objValue: "+parent.obj.objValue);
// console.log("parent : "+parent);
// console.log("child: "+ child);
// console.log("child.obj === parent.obj ?", child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("Grand Child : "+grandChild);
// grandChild.walk();

//function constructors

function Dog(name) {
  this.name = name;
  console.log("this is : ",this);
}
 var myDogi = new Dog("Anu");
 console.log("My Dog: ", myDogi);

Dog("Anu2");
new Dog("Anu3");
