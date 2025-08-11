function buySellStock(arr) {
  let profit = 0;
  let buy = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (buy > arr[i]) {
      buy = arr[i];
    }

    let sell = arr[i] - buy;

    if (profit < sell) {
      profit = sell;
    }
  }
  return profit;
}

let arr = [7, 1, 5, 3, 6, 4];
//buy = 1 , sell = 5-1= 4 , sell = 3-1 = 2
//profit = 4 , 4<2, 4
console.log(buySellStock(arr));
