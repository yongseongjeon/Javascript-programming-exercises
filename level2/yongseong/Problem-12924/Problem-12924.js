function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
      if (i >= n / 2) break;
      let sum = 0;
      let j = i;
      while (true) {
          sum += j++;
          if (sum === n) {
              result++;
              break;
          } else if (sum > n) {
              break;
          }
      }
      j = 1;
  }
  return result + 1;
}
