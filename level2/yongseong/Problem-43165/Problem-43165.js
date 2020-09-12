function solution(numbers, target) {
  let count = 0;
  function getAnswer(n, number) {
      if (n < numbers.length) {
          getAnswer(n + 1, number + numbers[n]);
          getAnswer(n + 1, number - numbers[n]);
      } else if (number === target) count++;
  }
  getAnswer(0, 0);
  return count;
}
