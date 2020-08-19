function solution(s) {
  let answer = "";
  let Count = 1;
  let transformResult = [];
  
  if (s.length === 1) return 1;
  
  for (let stringUnit = 1; stringUnit <= s.length / 2; stringUnit++) {
      for (let i = 0; i < s.length; i += stringUnit) {
          if (s.slice(i, i + stringUnit) === s.slice(i + stringUnit, i + stringUnit + stringUnit)) {
              Count++;
          }
          else {
              if (Count !== 1) {
                  answer += Count + s.slice(i, i + stringUnit);
                  Count = 1;
              }
              else {
                  answer += s.slice(i, i + stringUnit);
              }
          }
      }
      transformResult.push(answer);
      answer = "";
  }
  
  transformResult.sort((a, b) => a.length - b.length);
  
  return transformResult[0].length;
}
