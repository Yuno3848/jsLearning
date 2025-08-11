function palindrome(n) {
  let rev = 0;
  let original = n;
  while (n > 0) {
    let last_digit = n % 10;

    rev = 10 * rev + last_digit;
    n = Math.floor(n / 10);
  }

  return original === rev;
}
let n = 121;
console.log(palindrome(n));
