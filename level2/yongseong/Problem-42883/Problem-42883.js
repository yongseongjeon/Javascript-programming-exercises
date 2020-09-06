function solution(number, k) {
  let result = '';
  let num = number;
  let removeNum = k;
  while (true) {
      if (removeNum <= 0) {
          result += num;
          break;
      }
      if (number.length - k === result.length) break;
      const [biggestNum, biggestIdx] = getBiggestNumIdx(num.slice(0, removeNum + 1));
      result += biggestNum;
      num = num.slice(biggestIdx + 1);
      removeNum -= biggestIdx;
  }
  return result;

  function getBiggestNumIdx(str) {
      let biggestNum = '0';
      let biggestIdx = 0;
      for (let i = 0; i < str.length; i++) {
          if (biggestNum < str[i]) {
              biggestNum = str[i];
              biggestIdx = i;
          }
          if (str[i] === '9') break;
      };
      return [biggestNum, biggestIdx];
  }
}
