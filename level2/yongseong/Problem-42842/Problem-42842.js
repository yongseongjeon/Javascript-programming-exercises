function solution(brown, yellow) {
  const rectangleSize = brown + yellow;
  let sizeCandidate = getSizeCandidate(rectangleSize).filter((x) => {
      const yellowX = x[0] - 2;
      const yellowY = x[1] - 2;
      return yellowX * yellowY === yellow;
  });;
  return sizeCandidate.flat();
  
  // getSizeCandidate(48) === [ [ 16, 3 ], [ 12, 4 ], [ 8, 6 ] ]
  function getSizeCandidate(num) {
      let results = [];
      for (let i = 3; i < num / 2; i++) {
          if (num / i < i) break;
          if (num % i === 0) results.push([num / i, i]);
      }
      return results;
  }
}
