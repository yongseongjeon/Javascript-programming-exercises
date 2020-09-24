function solution(triangle) {
  const dpTriangle = triangle.concat();
  for (let i = 1; i < dpTriangle.length; i++) {
      for (let j = 0; j < dpTriangle[i].length; j++) {
          if (j === 0) {
              dpTriangle[i][j] += dpTriangle[i - 1][j];
          }
          else if (j === dpTriangle[i].length - 1) {
              dpTriangle[i][j] += dpTriangle[i - 1][j - 1];
          }
          else {
              dpTriangle[i][j] = Math.max(dpTriangle[i][j] + dpTriangle[i - 1][j - 1], dpTriangle[i][j] + dpTriangle[i - 1][j]);
          }
      }
  }
  return Math.max(...dpTriangle[dpTriangle.length - 1]);
}
