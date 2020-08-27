function solution(p) {
  return transformBracket(p);
  
  function transformBracket(str) {
      if (str === '') return '';
      
      let bracket = str.split('');
      let left = bracket.splice(0, 2).join('');
      let right = bracket;
      
      while (!isBlancedBracket(left)) {
          left += right.splice(0, 2).join('');
      }
      
      right = bracket.join('');
      
      if (isCorrectBracket(left)) {
          left += transformBracket(right);
          return left;
      }
      else {
          let string = '(';
          string += transformBracket(right);
          string += ')';
          string += reverseBracket(left.slice(1, left.length - 1));
          return string;
      }
  }
  
  function reverseBracket(str) {
      const brackets = str.split('');
      const stack = [];
      
      for (let bracket of brackets) {
          if (bracket === '(') stack.push(')');
          else stack.push('(')
      }
      
      return stack.join('');
  }
  
  function isCorrectBracket(str) {
      const brackets = str.split('');
      let stack = [];
      
      for (let bracket of brackets) {
          if (stack.length === 0) {
              if (bracket === ')') return false;
              stack.push(bracket);
          }
          else {
              if (bracket === '(') stack.push(bracket);
              else stack.pop();
          }
      }
      
      return stack.length === 0;
  }
      
  function isBlancedBracket(str) {
      let leftBracketNum = 0;
      let rightBracketNum = 0;
      
      for (let i = 0; i < str.length; i++) {
          if (str[i] === '(') leftBracketNum++;
          else rightBracketNum++;
      }
      
      return leftBracketNum === rightBracketNum;
  }
}
