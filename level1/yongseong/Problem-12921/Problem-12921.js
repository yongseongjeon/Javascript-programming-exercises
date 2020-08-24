function solution(n) {
  const primeList = Array(n + 1).fill(true);
  primeList.splice(0, 2, false, false);

  for (let i = 2; i * i <= n; i++) {
      if (primeList[i]) {
          for (let j = i * i; j <= n; j += i) {
              primeList[j] = false;
          }
      }
  }

  const primeNum = primeList.filter(x => x).length;
  return primeNum;
}
