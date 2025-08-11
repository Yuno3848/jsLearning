function removeElement(arr, val) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (val !== arr[i]) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

let val = 3;
let arr = [3, 2, 2, 3];

console.log(removeElement(arr, val));
