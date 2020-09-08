function solution(number) {
  let string = number.map((x) => x + '');
  string.sort((a, b) => {
      const leftString = a + b;
      const rightString = b + a;
      if (leftString > rightString) return -1;
      else if (leftString < rightString) return 1;
      else return 0;
  });
  if (number.reduce((sum, num) => sum + num) === 0) return "0";
  return string.join('');
}
