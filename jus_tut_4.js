console.log(a); // this will return undefined due to hoisting and no concept of tdz
// console.log(b);
// console.log(c);
// in case of b and c we are trying to access the b and c but due to tdz we are getting an error
display();
var a;

const b = 20;
let c = 30;
function display() {
  console.log("welcome to static and chai");
}
