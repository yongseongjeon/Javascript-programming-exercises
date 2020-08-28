function solution(n, t, m, p) {
  let answer = [];
  let entireNum = [];
  entireNum = Array(t * m)
      .fill(0)
      .map((x, idx) => x + idx)
      .map(x => x.toString(n).toLocaleUpperCase())
      .join('');
  for (let i = p - 1; i < t * m; i += m) {
      answer.push(entireNum[i]);
  }
  return answer.join('');
}
