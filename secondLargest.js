function secondLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }
  let secondLargest = -Infinity;
  let firstLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (secondLargest < arr[i] && firstLargest !== arr[i]) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [1, 2, 2];
console.log(secondLargest(arr));
