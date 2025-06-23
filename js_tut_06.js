// let num1 = 10;
// let num2 = 20;

// function add(num1, num2) {
//   let num3 = 20;
//   console.log(num3);
//   return num1 + num2;
// }

// let addition_one = add(num1, num2);
// let addition_two = add(30, 40);
// console.log("Addition One:", addition_one);
// console.log("Addition Two:", addition_two);

//deep copy and shallow in objects
let obj = {
  name: "kate",
  address: "delhi",
  age: 23,
  fullDetails: {
    firstName: "kate",
    secondName: "singh",
    thirdName: "sharma",
    flatNo: 52,
    city: "delhi",
    state: "delhi",
  },
};

let obj1 = obj;
obj1.fullDetails.firstName = "kate kate kate";

obj.name = "hello";
// console.log(obj);
// console.log(obj1);

let obj10 = {
  a: 1,
  b: 2,
  c: 3,
};
obj10.a = 10;
let obj11 = { ...obj10 };
console.log(obj11);

let obj12 = Object.assign({}, obj10);
console.log(obj12);
//deep copy

let tempObj = JSON.stringify(obj);
console.log(tempObj);

obj.address = "uttrakhand";
console.log(obj);
console.log(tempObj);

let obj4 = JSON.parse(tempObj);
console.log(obj4);
obj.fullDetails.firstName = "chai aur static";
console.log("obj", obj);
console.log(obj4);

let obj15 = JSON.parse(JSON.stringify(obj));

obj.fullDetails.firstName = "visual studio";
console.log(obj15);

//Object.freeze
let tempObj1 = {
  a: 1,
  b: 2,
  c: 3,
};
Object.freeze(tempObj1);
tempObj1.a = 100;
console.log(tempObj1);
console.log("b" in tempObj1);
console.log(Object.entries(tempObj1));
console.log(Object.keys(tempObj1));
console.log(Object.values(tempObj1));

let user = {
  fullName: "kate",
  instructor: "programming",
  experience: 23,
  fullDetails: {
    firstName: "chai aur static",
  },
};

const { fullName: fName } = user;
// console.log(fullName);
console.log(fName);

const {
  fullDetails: { firstName: f_Name },
} = user;
// console.log(firstName);
console.log(f_Name);

let worker = {
  fullName: "kate",
  instructor: "programming",
  experience: 23,
  fullDetails: {
    firstName: "chai aur static",
    address: {
      state: "delhi",
    },
  },
  working: {
    hours: 2,
  },
};

function display({
  fullName,
  fullDetails: {
    firstName,
    address: { state },
  },
  working: { hours },
}) {
  console.log(
    `my full name is  : ${fullName} and my fullName is : ${firstName} and i live in : ${state} and i work for : ${hours}`
  );
}
display(worker);

let arr = [1, 2, 3, 4, 5];
function displayNum(val1, val2, val3, ...arr) {
  return arr;
}

console.log(displayNum(...arr));
