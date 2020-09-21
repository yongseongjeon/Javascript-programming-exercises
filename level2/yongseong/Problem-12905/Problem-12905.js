function solution(board) {
  const rowLength = board[0].length;
  const columnLength = board.length;
  
  // 모두 0인 케이스
  if (board.flat(1).every((x) => x === 0)) return 0;
  
  for (let i = Math.min(rowLength, columnLength); i >= 1; i--) {
      let squareArea = getSquareArea(i);
      if (squareArea) return squareArea;
  }

  function getSquareArea(suqareLength) {
      for (let i = 0; i <= rowLength - suqareLength; i++) {
          for (let j = 0; j <= columnLength - suqareLength; j++) {
              if (isPossibleSquare(i, j, suqareLength)) {
                  return suqareLength * suqareLength;
              }
          }
      }
      return false;
  }
  function isPossibleSquare(x, y, length) {
      for (let i = y; i < y + length; i++) {
          for (let j = x; j < x + length; j++) {
              if (board[i][j] === 0) return false;
          }
      }
      return true;
  }
}
