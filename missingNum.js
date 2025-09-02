function missingNum(arr) {
  let n = num.length;
  let totalSum = (n * (n + 1)) / 2;
  let arrSum = 0;
  let num = 0;
  for (let i = 0; i < n; i++) {
    arrSum += num[i];
  }

  return totalSum - arrSum;
}
let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNum(arr));
