function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prev = i - 1;
    let curr = arr[i];

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }
  return arr;
}
let arr = [7, 1, 5, 4, 3, 2];
console.log(insertionSort(arr));
