function solution(n, words) {
  const wrongWordNth = getWrongWordNth(words);
  const overlapNth = getOverlapNth(words);
  const oneLengthWordNth = getOneLengthWordNth(words);
  let candidate = [];
  if (wrongWordNth !== 1) candidate.push(wrongWordNth);
  if (overlapNth !== 1) candidate.push(overlapNth);
  if (oneLengthWordNth !== 0) candidate.push(oneLengthWordNth);
  
  candidate.sort((a, b) => a - b);
  const wrongNth = candidate[0];
  const nth = wrongNth % n === 0 ? n : wrongNth % n;
  const turn = (wrongNth - nth) / n + 1;
  return candidate.length === 0 ? [0, 0] : [nth, turn];
  
  function getWrongWordNth(arr) {
      let wrongWordIdx = 0;
      for (let i = 0; i < arr.length - 1; i++) {
          let frontWord = arr[i];
          let backWord = arr[i + 1];
          if (frontWord[frontWord.length - 1] !== backWord[0]) {
              wrongWordIdx = i + 1;
              break;
          }
      }
      return wrongWordIdx + 1;
  }
  
  function getOverlapNth(arr) {
      let overlapIdx = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr.slice(0, i).includes(arr[i])) {
              overlapIdx = i;
              break;
          }
      }
      return overlapIdx + 1;
  }
  
  function getOneLengthWordNth(arr) {
      let oneLengthWordIdx = -1;
      for (let i = 0; i < arr.length; i++) {
          if (arr[i].length === 1) {
              oneLengthWordIdx = i;
              break;
          }
      }
      return oneLengthWordIdx + 1;
  }
}
