function solution(N, stages) {
  let numSurvivors = stages.length;
  let failCount = 0;
  let failureRate = [];
  
  for (let i = 0; i < N; i++) {
      stages.forEach(x => {
          if (x === i + 1) {
             failCount++;
          }
      });
      failureRate.push({stage: i + 1, failureRate : numSurvivors === 0 ? 0 : failCount / numSurvivors});
      numSurvivors -= failCount;
      failCount = 0;
  };
  
  // console.log(failureRate);
  // [ { stage: 1, failureRate: 0.125 },
  //   { stage: 2, failureRate: 0.42857142857142855 },
  //   { stage: 3, failureRate: 0.5 } ...
  
  const answer = [];
  failureRate = failureRate.sort((a, b) => {
      if (a.failureRate === b.failureRate) return a.stage - b.stage;
      else return b.failureRate - a.failureRate;
   });
  
  for (let i = 0; i < N; i++) {
      answer.push(failureRate[i].stage);
  }
  
  return answer;
}
