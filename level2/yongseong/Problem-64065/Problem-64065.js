function solution(s) {
  let arr = s.split('},{')
              .map((x) => x.replace(/{|}/g, ''))
              .map((x) => x.split(','))
              .sort((a, b) => a.length - b.length);
  let answer = [];
  answer.push(arr[0][0]);
  arr.forEach((x, idx, origin) => {
      if (idx + 1 < arr.length) {
          origin[idx + 1].forEach((y) => {
              if (!x.includes(y)) answer.push(y);
          });
      }
  });
  return answer.map((x) => x / 1)
}
