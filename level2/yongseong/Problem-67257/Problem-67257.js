function solution(expression) {
  const numbers = expression.split(/\*|-|\+/g).map((x) => x / 1);
  const operator = expression.split(/[0-9]*/g).filter((x) => x.length > 0);
  const operatorKind = operator.filter((x, idx, origin) => origin.indexOf(x) === idx);
  const operatorNum = operatorKind.length;
  const priorityOperator = getPermutations(operatorKind, operatorNum);
  let candidate = [];
  
  priorityOperator.forEach((x) => {
      candidate.push(priorityOperation(x, numbers, operator));
  });
  candidate.sort((a, b) => b - a);
  return candidate[0];
  
  function priorityOperation(priority, nums, operators) {
      let numbers = nums.concat();
      let operator = operators.concat();
      priority.forEach((order) => {
          while (operator.includes(order)) {
              for (let i = 0; i < operator.length; i++) {
                  if (order === operator[i]) {
                      const result = operation(numbers[i], operator[i], numbers[i + 1]);
                      numbers.splice(i, 2, result);
                      operator.splice(i, 1);
                      break;
                  }
              }
          }
      });
      return Math.abs(numbers[0]);
  }
  function operation(num1, operator, num2) {
      switch (operator) {
          case '+':
              return num1 + num2;
          case '-':
              return num1 - num2;
          case '*': 
              return num1 * num2;
          default:
              return '잘못된 연산자입니다.';
      }
  }
  function getPermutations(arr, num) {
      const results = [];
      if (num === 1) return arr.map((x) => [x]);
      arr.forEach((fixed, idx, origin) => {
          const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
          const permutations = getPermutations(rest, num - 1);
          const attached = permutations.map((permutation) => [fixed, ...permutation]);
          results.push(...attached);
      });
      return results;
  }
}
