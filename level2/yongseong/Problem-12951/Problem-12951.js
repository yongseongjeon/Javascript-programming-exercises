function solution(s) {
  let jadenCase = s.toLowerCase().split(' ');
  jadenCase = jadenCase.map((x, idx) => {
      if (x.length) return x.replace(x[0], x[0].toLocaleUpperCase());
      return x;
  });
  return jadenCase.join(' ');
}
