function solution(n) {
  let numbers = ['4', '1', '2']
  let answer = '';
  let num = n;
  while (num > 0) {
      answer = numbers[num % 3] + answer;
      num = Math.floor(num / 3);
  }
  return answer;
}
