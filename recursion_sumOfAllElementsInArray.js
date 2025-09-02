function sum(arr, target) {
  let n = arr.length - 1;
  let i = 0;
  while (i <= n) {
    if (target == arr[i]) return true;
    i++;
  }
  return false;
}

let arr = [5, 4, 3, 2, 1];
let target = 1;
console.log(sum(arr, target));
