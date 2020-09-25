function solution(n, computers) {
  const isVisitedArr = Array(n).fill(false);
  let dfsCount = 0;
  
  for (let i = 0; i < computers.length; i++) {
      if (!isVisitedArr[i]) {
          dfs(i);
          dfsCount++;
      }
  }
  return dfsCount;
  
  function dfs(n) {
      isVisitedArr[n] = true;
      for (let i = 0; i < computers.length; i++) {
          if (computers[n][i] === 1 && !isVisitedArr[i]) {
              dfs(i);
          }
      }
  }
}
