function solution(board, moves) {
  let nums = [];
  let answer = 0;
  
  for (let move of moves) {
      for (let row of board) {
          if (row[move-1] != 0) {
              nums.push(row[move-1]);
              row[move-1] = 0;
              break;
          }
      }
  }
  
  for (let i = 0; i < nums.length; i++) {
      if (i != nums.length-1) {
          if (nums[i] === nums[i+1]) {
              nums.splice(i, 1);
              nums.splice(i, 1);
              answer += 1;
              i = -1;
          }
      }
  }
  return answer * 2;
}
