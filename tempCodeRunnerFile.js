function sum(arr) {
  let n = arr.length
  return arr[n] + sum(arr[n--])
}
let arr = [1, 2, 3, 4, 5, 6];
console.log(sum(arr));
