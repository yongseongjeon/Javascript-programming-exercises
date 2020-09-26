function solution(begin, target, words) {
  let count = 0;
  let stack = [];
  let isVisited = Array(words.length).fill(false);
  
  stack.push(begin);
  while (stack.length) {
      let current = stack.pop();
      if (current === target) return count;
      words.forEach((word, idx) => {
          if (isDifferenceOneWord(current, word) && !isVisited[idx]) {
              stack.push(word);
              isVisited[idx] = true;
          }
      });
      count++;
  }
  return 0;
  
  function isDifferenceOneWord(str1, str2) {
      for (let i = 0; i < str1.length; i++) {
          const leftStr = str1.slice(0, i) + str1.slice(i + 1);
          const rightStr = str2.slice(0, i) + str2.slice(i + 1);
          if (leftStr === rightStr) return true;
      }
      return false;
  }
}
