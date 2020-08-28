function solution(msg) {
  let str = msg;
  const answer = [];
  const dic = Array(26)
              .fill(65)
              .map((x, idx) => x + idx)
              .map(x => String.fromCharCode(x))
  // ['A', 'B', 'C' ... 'X', 'Y', 'Z']
  while (str.length) {
      for (let i = str.length; i > 0; i--) {
          let shouldCheckMsg = str.split('').slice(0, i).join('');
          if (dic.includes(shouldCheckMsg)) {
              const dicIdx = dic.indexOf(shouldCheckMsg);
              answer.push(dicIdx + 1);
              str = str.replace(shouldCheckMsg, '');
              if (dic.includes(shouldCheckMsg + str[0]) === false) {
                  dic.push(shouldCheckMsg + str[0]);
              }
              break;
          }
      }
  }
  return answer;
}
