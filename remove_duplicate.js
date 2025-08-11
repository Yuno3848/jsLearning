function removeDuplicate(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[x] != arr[i]) {
      arr[x] = arr[i];
      x++;
    }
  }

  return arr;
}

let arr = [1, 2, 3, 3, 4, 4, 4, 5, 6, 8];
console.log(removeDuplicate(arr));
