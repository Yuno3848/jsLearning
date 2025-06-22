// let const var

var a = 1;
console.log(a);

function num() {
  var a = 4;
  var b = 3;
  console.log("value of b inside num function b:", b);
  console.log("value of a inside num function a :", a);
}
num();
// console.log("value of b outside the num function :", b); this will give error cuz b ins't defined due to function scoped
{
  var blockTemp = 10;
  console.log("value of blockTemp inside block :", blockTemp);
  console.log("value of a inside block :", a);
  //   console.log("value of b inside block :", b);
}
console.log("value of blockTemp outside block :", blockTemp);
var c;
c = 2;
console.log("value of c :", c);

var c = 4;
console.log("value of c :", c);

//let
let e = 4;
e = 3;

console.log("value of e :", e);
let g = 10;
{
  console.log("value of g inside block :", g);

  let h = 5;
  console.log("value of h inside block :", h);
}
// console.log("value of h outside block :", h); //give error cuz let is blocked scope

function temp() {
  let tempFuncNum = 20;
  console.log("value of g inside function temp :", g);
  //   console.log("value of  h inside temp function : ", h);
  console.log("value of tempFuncNum inside function :", tempFuncNum);
}
temp();
// console.log("value of tempFuncNum outside function :", tempFuncNum);

function display() {
  var k = 20;
  let m = 30;
  if (true) {
    let t = 200;
    var l = 100;
    console.log(k);
    console.log(m);
  }
  console.log(l);
  console.log(k);
  console.log(m);
}
display();

//const scope = let scope
const mma = 100;
console.log(mma);
{
  const gga = 200;
  console.log(gga);
  console.log(mma);
}

console.log(gga);
