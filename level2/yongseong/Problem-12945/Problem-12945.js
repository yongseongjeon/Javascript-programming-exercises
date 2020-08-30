function solution(n) {
  const arr = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
      arr.push(arr[arr.length - 2] % 1234567  + arr[arr.length - 1] % 1234567);
  }
  return arr[arr.length - 1] % 1234567;
}
