function reverseString(s) {
  for (let i = 0; i < s.length / 2; i++) {
    let temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
  return s;
}

let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
