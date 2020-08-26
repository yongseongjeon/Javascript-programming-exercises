function solution(m, n, boards) {
  let board = boards.map(x => x.split(''));
  let removeBlock = [];

  while (getIndexFourBlock(board).length) {
      removeBlock = removeFourBlock(board, getIndexFourBlock(board));
      board = dropBlock(removeBlock);
  }
  return countRemoveBlock(board);
  
  function countRemoveBlock(board) {
      let cnt = 0;
      board.forEach(x => {
          x.forEach(y => {
              if (y === false) cnt++;
          });
      });
      return cnt;
  }

  function getIndexFourBlock(board) {
      const indexes = [];
      for (let row = 0; row < m - 1; row++) {
          for (let column = 0; column < n - 1; column++) {
              if (board[row][column] === board[row][column + 1] && 
                  board[row][column + 1] === board[row + 1][column] &&
                  board[row + 1][column]  === board[row + 1][column + 1] ) {
                  if (board[row][column] !== false) indexes.push([row, column]);
              }
          }
      }
      return indexes;
  }
  
  function removeFourBlock(board, idx) {
      idx.forEach(x => {
          board[x[0]].splice(x[1], 2, ' ', ' ');
          board[x[0] + 1].splice(x[1], 2, ' ', ' ');  
      });
      return board;
  }
  
  function dropBlock(board) {
      const removeSpaceArr = [];
      let arr = [];
      for (let column = 0; column < n; column++) {
           for (let row = 0; row < m; row++) {
               arr.unshift(board[row][column]);
           }
          removeSpaceArr.push(arr.filter(x => x !== ' '));
          arr = [];
      };
      const dropBlock = [];
      for (let column = 0; column < m; column++) {
          for (let row = 0; row < n; row++) {
              if (removeSpaceArr[row][column] === undefined) arr.push(false);
              else arr.push(removeSpaceArr[row][column]);
          }
          dropBlock.unshift(arr)
          arr = [];
      }
      return dropBlock;
  }
}
