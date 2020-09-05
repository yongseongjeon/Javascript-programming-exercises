function solution(numbers) {
  let candidate = [];
  for (let i = 1; i <= numbers.length; i++) {
      candidate.push(getPermutations(numbers.split(''), i))
  }
  candidate = candidate.flat().map((x) => x.join('') / 1).sort((a, b) => a - b);
  candidate = candidate.filter((x, idx) => candidate.indexOf(x) === idx).filter((x) => isPrime(x));
  return candidate.length;
  
  function getPermutations(arr, num) {
      if (num === 1) return arr.map((x) => [x]);
      const result = [];
      arr.forEach((fixed, idx, origin) => {
          const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
          const permutations = getPermutations(rest, num - 1);
          const attached = permutations.map((permutation) => [fixed, ...permutation]);
          result.push(...attached);
      });
      return result;
  }
  
  function isPrime(num) {
      if (num <= 1) return false;
      if (num !== 2 && num % 2 === 0) return false;
      for (let i = 3; i < num; i += 2) {
          if (num % i === 0) return false;
      }
      return true;
  }
}
