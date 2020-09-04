function solution(arr) {
  let lcm = 1;
  while (true) {
      if (arr.every((x) => lcm % x === 0)) break;
      lcm++;
  }
  return lcm;
}
