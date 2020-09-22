function solution(board) {
  const rowLength = board[0].length;
  const columnLength = board.length;
  let squareLength = 0;
  
  for (let i = 1; i < columnLength; i++) {
      for (let j = 1; j < rowLength; j++) {
          if (board[i][j] !== 0) {
              const minimumVal = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
              board[i][j] = minimumVal + 1;
              if (squareLength < board[i][j]) squareLength = board[i][j];
          }
      }
  }
  
  if (rowLength < 2 || columnLength < 2) {
      if (board.flat(1).some((x) => x === 1)) return 1;
      else return 0;
  }
  
  return squareLength ** 2;
}
