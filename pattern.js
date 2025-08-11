// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row += "*";
//   }
//   console.log(row);
// }
// console.log("-----------------------------------------");
// for (let k = 0; k < n; k++) {
//   let row = "";
//   for (let m = 0; m <= k; m++) {
//     row += "*";
//   }
//   console.log(row);
// }
// console.log("-----------------------------------------");
// for (let a = 0; a < n; a++) {
//   let row = "";
//   for (let b = 0; b < a + 1; b++) {
//     row += b + 1;
//   }
//   console.log(row);
// }
// console.log("-----------------------------------------");
// for (let x = 0; x < n; x++) {
//   let row = "";
//   for (let z = 0; z <= x; z++) {
//     row += x + 1;
//   }
//   console.log(row);
// }
// console.log("-----------------------------------------");

// for (let c = 0; c < n; c++) {
//   let row = "";
//   for (let d = 0; d < n - c; d++) {
//     row += d + 1;
//   }
//   console.log(row);
// }
// console.log("-----------------------------------------");

// for (let f = 0; f < n; f++) {
//   let row = "";
//   for (let g = 0; g < n - f; g++) {
//     row += "*";
//   }
//   console.log(row);
// }

let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row += " ";
//   }

//   for (let k = 0; k < i; k++) {
//     row += "*";
//   }
//   console.log(row);
// }
let toggle = 1;
for (let j = 0; j < n; j++) {
  let row = "";

  for (let k = 0; k < j + 1; k++) {
    row += toggle;
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
