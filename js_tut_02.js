//Number

console.log("max value of int :", Number.MAX_VALUE);
console.log("mIN value of int :", Number.MIN_VALUE);

//Math
//Math abs
console.log("Math abs :", Math.abs(-10)); //returns the result in positive
//Math Round
console.log("Math Round :", Math.round(4.49));
//Math  floor
console.log("Math floor : ", Math.floor(4.1)); // returns the number which is placed before the decimal point
//Math ceil
console.log("Math ceil :", Math.ceil(4.1)); // returns the number incremented by 1 which is placed before the decimal point
//Math min
console.log("Math min : ", Math.min(10, 20, 5)); // returns the lowest number
//Math max
console.log("Math max :", Math.max(10, 20, 5)); // returns the greatest number
//Math random
console.log("Math random :", Math.random()); // returns the random number range between 0 -1
console.log(
  "to generate random number between 1-10 :",
  Math.floor(Math.random() * 10 + 1)
);

//Symbol
let sym1 = Symbol(1); //sdf23424if //bts generates an unique key
let sym2 = Symbol(1); //sdfhkdshf234329u4
console.log(sym1 == sym2);

//Arrays
let arr = [1, 2, 4, 5]; //homogeneous array
let arr1 = [2, "sdfsfd"]; //heterogeneous array

console.log("0th index of arr : ", arr[3]);
console.log("length of the array :", arr.length);

arr.push(6);
arr.push(7);
arr.push(8);
console.log("arr :", arr);

arr.pop();
arr.pop();
console.log("arr popped :", arr);

arr.shift();
console.log("arr shift:", arr);

arr.unshift("ten");
console.log("arr unshift :", arr);

let arr2 = [10, 120, 30, 40];
console.log("isArray :", Array.isArray(arr2));
console.log("isArray :", Array.isArray("chai aur code"));
console.log("isArray :", Array.isArray({ name: "chai aur code" }));
console.log("isArray :", Array.isArray([]));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let objTemp = {
  score4: 400,
};

console.log("of :", Array.of(score1, score2, score3, objTemp));

let fullName = "kate bihari";
console.log("from :", Array.from(fullName));

let tempArr = [1, 2, 3, "sdfsdfs"];
console.log("typeof tempArr :", typeof tempArr);

//function

function display() {
  console.log("welcome to chai and static");
}
display();

function displayTemp() {
  return "hello welcome to chai and static";
}
console.log(displayTemp());

const tempDisplay = displayTemp;
console.log(tempDisplay());

const funcTemp = function () {
  console.log("Im anon");
};

funcTemp();

const tempFunc1 = () => {
  return "kate bihari";
};

console.log(tempFunc1());
console.log("type of: ", typeof tempFunc1);
console.log("instace of :", tempFunc1 instanceof Object);

let tempName;
function display3(tempName = "chimpak") {
  tempName = "temp0name";
  console.log("your name is :", tempName);
}
display3();
// undefined and null

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2));
const addtion = add;
console.log(addtion(1, 2));

let a;
const b = null;
console.log("value of a :", a);
console.log("value of b :", b);

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);
// console.log(undefined <= 0);
// console.log(undefined >= 0);

console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);
// <= , >= null will be converted to 0 (because of <,>) and then it will compare to 0 which results in  true

//objects

const obj1Temp = {
  name: "chai aur static",
  fistName: "chai",
  middleName: "aur",
  lastName: "static",
  "D-O-B": "12 / 12 / 1998",
  detailedInfo: {
    age: 24,
    address: "uttrakhand",
  },
};
// console.log(obj1Temp.name); //dot notation
// console.log(obj1Temp.middleName);
// console.log(obj1Temp.lastName);
// console.log(obj1Temp["D-O-B"]); // bracket notation
// console.log(obj1Temp.detailedInfo.address);

const id1 = { a: 1, b: 2 };
const id2 = { c: 3, d: 4 };
// console.log({ id1, id2 }); {id1:{} , id2:{}}
console.log(Object.assign({}, id1, id2));

//spread operator
const tempArr1 = [1, 2, 3, 4, 5, 6];
console.log(...tempArr1);
