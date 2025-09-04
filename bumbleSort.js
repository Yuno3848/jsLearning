function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [[arr[j]], arr[j + 1]] = [[arr[j + 1]], arr[j]];
        isSwap = true;
      }
      if (!isSwap) break;
    }
  }
  return arr;
}
let arr = [5, 2, 4, 1];
console.log(bubbleSort(arr));
