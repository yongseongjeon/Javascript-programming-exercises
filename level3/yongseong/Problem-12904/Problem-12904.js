function solution(s) {
  let str = s;
  for (let i = str.length; i > 0; i--) {
      for (let j = 0; j < str.length - i + 1; j++) {
          if (isPalindrome(str.slice(j, i + j))) return i;
      }
  }
  function isPalindrome(str) {
      for (let i = 0; i < str.length / 2; i++) {
          if (str[i] !== str[str.length - i - 1]) return false;
      }
      return true;
  }
}
