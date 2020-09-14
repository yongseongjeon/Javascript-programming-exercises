function solution(n) {
  return getFibonacci(n + 1);
  function getFibonacci(n) {
      const fibonacciArr = [0, 1, 1];
      for (let i = 2; i < n; i++) {
          fibonacciArr.push(fibonacciArr[i - 1] % 1000000007 + fibonacciArr[i] % 1000000007);
      }
      return fibonacciArr[n] % 1000000007;
  }
}
