function solution(d) {
  const dartResult = d;
  let score = dartResult.match(/([0-9]*)/g);
  score = score.filter(x => x !== '').map(x => x / 1);
  // console.log(score); [ 1, 2, 3 ]
  
  let bonusOption = dartResult.split(/[0-9]/);
  bonusOption = bonusOption.filter(x => x !== '');
  // console.log(bonusOption) [ 'S', 'D*', 'T' ]
  
  let firstScore = score[0];
  let secondScore = score[1];
  let thirdScore = score[2];
  
  bonusOption.forEach((bonusOption, idx) => {
      // 보너스
      if (bonusOption[0] === 'D') {
          if (idx === 0) firstScore = Math.pow(firstScore, 2);
          else if (idx === 1) secondScore = Math.pow(secondScore, 2);
          else thirdScore = Math.pow(thirdScore, 2);
      }
      else if (bonusOption[0] === 'T') {
          if (idx === 0) firstScore = Math.pow(firstScore, 3);
          else if (idx === 1) secondScore = Math.pow(secondScore, 3);
          else thirdScore = Math.pow(thirdScore, 3);
      }

      // 옵션
      if (bonusOption[1] === '*') {
          if (idx === 0) {
              firstScore *= 2;
          }
          else if (idx === 1) {
              firstScore *= 2;
              secondScore *= 2;
          }
          else {
              secondScore *= 2;
              thirdScore *= 2;
          }
      }
      else if (bonusOption[1] === '#') {
          if (idx === 0) firstScore *= -1;
          if (idx === 1) secondScore *= -1;
          if (idx === 2) thirdScore *= -1;
      }
  });
  
  return firstScore + secondScore + thirdScore;
}
