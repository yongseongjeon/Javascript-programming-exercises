function solution(arr1, arr2) {
  const frontRowNum = arr1[0].length;
  const backColumnNum = arr2[0].length;
  let answer = [];
  let answerRow = [];
  let sum = 0;
  for (let k = 0; k < arr1.length; k++) {
      for (let i = 0; i < backColumnNum; i++) {
          for (let j = 0; j < frontRowNum; j++) {
              sum += arr1[k][j] * arr2[j][i];
          }
          answerRow.push(sum);
          sum = 0;
      }
      answer.push(answerRow);
      answerRow = [];
  }
  return answer;
}
