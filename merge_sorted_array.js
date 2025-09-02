// function mergeSortedArray(nums1, nums2) {
//   nums1 = [...nums1, ...nums2];
//   nums1.sort((a, b) => a - b);
//   let i = 1;
//   while (i <= nums2.length) {
//     nums1.shift();
//     i++;
//   }
//   return nums1;
// }

// function mergeSortedArray(nums1, nums2) {
//   let m = nums1.length;
//   let n = nums2.length;
//   let nums1Copy = nums1.slice(0, n);

//   let p1 = 0;
//   let p2 = 0;
//   let newArr = [];

//   while (p1 < m && p2 < n) {
//     if (nums1Copy[p1] < nums2[p2]) {
//       newArr.push(nums1Copy[p1]);
//       p1++;
//     } else {
//       newArr.push(nums2[p2]);
//       p2++;
//     }
//   }
//   while (p1 < nums1Copy.length) {
//     newArr.push(nums1Copy[p1]);
//     p1++;
//   }
//   while (p2 < nums2.length) {
//     newArr.push(nums2[p2]);
//     p2++;
//   }
//   return newArr;
// }

// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];

function mergeSortedArray(nums1, nums2) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && nums1[p1] < nums2[p2]) {
      nums1[i] = nums2[p2];
      p2--;
    } else {
      nums1[i] = nums2[p1];
      p1--;
    }
  }
  return nums1;
}

let m = 3;
let n = 3;
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [4, 5, 6];
console.log(mergeSortedArray(nums1, nums2, m, n));
//[1,2,3,0,0,0]
//[4,5,6]
//[4,5,6,0,0,0]
//[1,2,3]
