function solution(numbers) {
  let candidate = [];
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          let num = numbers[i] + numbers[j];
          if (!candidate.includes(num)) candidate.push(num);
      } 
  }
  candidate.sort((a, b) => a - b)
  return candidate;
}
