function reverse(n) {
  let original_cpy = n;
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    let last_digit = n % 10;
    rev = rev * 10 + last_digit;
    n = Math.floor(n / 10);
  }

  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;

  return original_cpy < 0 ? -rev : rev;
}

let n = -1234;
console.log(reverse(n));
