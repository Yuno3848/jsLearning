let a = 2;
console.log("value of a", a);
console.log("type of a :", typeof a);

let name = "kate";

console.log("value of name", name);
console.log("type of name :", typeof name);

let b = Symbol("kate");

console.log("value of b", b);
console.log("type of b :", typeof b);

//function
function display() {
  console.log("hello welcome to javascript chai");
}
display();
console.log("type of display :", typeof display);

//object

const obj = {
  // key value pairs

  fistName: "kate",
  secondName: "bihari",
  age: 23,
  objArr: [1, 2, 3, "sdfsf"],
  func: function () {
    console.log("im inside the object");
  },
};
console.log("value of obj : ", obj);
console.log(" type of obj :", obj);

let arr = [
  "kate",
  1,
  1.45,
  {
    // key value pairs

    fistName: "kate",
    secondName: "bihari",
    age: 23,
  },

  function nameCarDisplay() {
    console.log("my fav car");
  },
];
console.log("value of arr :", arr);
console.log("type of arr :", typeof arr);

