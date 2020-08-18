function solution(w, h) {
  function findGcd(n, m) {
      let smallNum, largeNum, gcd, remainder;

      smallNum = Math.min(n, m);
      largeNum = Math.max(n, m);

      while (remainder !== 0) {
          remainder = largeNum % smallNum;
          if (remainder === 0) {
              gcd = smallNum;
          }
          if (remainder > smallNum) {
              largeNum = remainder;
          }
          else {
              largeNum = smallNum;
              smallNum = remainder;
          }
      }
      return gcd;
  }
  
  if (w === 1 || h === 1) {
      return 0;
  }
  
  const gcd = findGcd(w, h);
  const width = w / gcd;
  const height = h / gcd;
  const numTangents = width + height - 2;
  const lineArea = (numTangents + 1) * gcd;
  const availableArea = w * h - lineArea;
  
  return availableArea;
}
