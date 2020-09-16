function solution(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
      arr.push([]);
  }
  let num = 0;
  let row = -1;
  let column = 0;
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i; j++) {
          if (i % 3 === 0) {
              arr[++row][column] = ++num;
          } 
          else if (i % 3 === 1) {
              arr[row][++column] = ++num;
          } 
          else {
              arr[--row][--column] = ++num;
          }
      }
  }

  return arr.flat(1);
}
