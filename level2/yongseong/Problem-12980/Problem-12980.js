function solution(n) {
  let jumpNum = 1;
  let distance = n;
  while (distance > 1) {
      if (distance % 2 > 0) jumpNum++;
      distance /= 2;
      distance = Math.floor(distance);
  }
  return jumpNum;
}
