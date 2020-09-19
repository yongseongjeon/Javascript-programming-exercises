function solution(n) {
  const numbers = ['4', '1', '2'];
  let answer = '';
  let num = n;
  while (num > 0) {
      answer = numbers[num % 3] + answer;
      num = Math.floor(num / 3) - (num % 3 === 0 ? 1 : 0);
  }
  return answer;
}
