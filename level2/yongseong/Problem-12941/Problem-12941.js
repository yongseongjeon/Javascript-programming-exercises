function solution(A,B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);    
  let arr = [];
  A.forEach((x, idx) => arr.push(x * B[idx]));
  return arr.reduce((acc, num) => acc + num);
}
