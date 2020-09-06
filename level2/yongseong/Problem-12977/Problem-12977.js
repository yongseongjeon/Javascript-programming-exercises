function solution(nums) {
  let combinations = getCombinations(nums, 3)
                      .map((x) => x.reduce((sum, num) => sum + num))
  const primeList = combinations.filter((x) => isPrime(x));
  return primeList.length;
  
  function isPrime(num) {
      if (num <= 1) return false;
      if (num !== 2 && num % 2 === 0) return false;
      for (let i = 3; i < num / 2; i += 2) {
          if (num % i === 0) return false;
      }
      return true;
  }
  
  // getCombinations([1, 2, 3], 2) === [ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
  function getCombinations(arr, num) {
      if (num === 1) return arr.map((x) => [x]);
      const results = [];
      arr.forEach((fixed, idx, origin) => {
          const rest = origin.slice(idx + 1);
          const combinations = getCombinations(rest, num - 1);
          const attached = combinations.map((combination) => [fixed, ...combination]);
          results.push(...attached);
      });
      return results;
  }
}
