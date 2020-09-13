function solution(operations) {
  let operationsArr = operations.map((x) => x.split(' ')).map((x) => [x[0], x[1] / 1]);
  let queue = [];
  operationsArr.forEach((operation) => {
      if (operation[0] === 'I') {
          queue.push(operation[1]);
      } else if (operation[0] === 'D' && queue.length >= 1) {
          let [smallestIdx, biggestIdx] = smallestAndBiggestIdx(queue);
          if (operation[1] === 1) {
              queue.splice(biggestIdx, 1);
          } else {
              queue.splice(smallestIdx, 1);
          }
      }
  });
  let [smallestIdx, biggestIdx] = smallestAndBiggestIdx(queue);
  return queue.length ? [queue[biggestIdx], queue[smallestIdx]] : [0, 0];
  
  function smallestAndBiggestIdx(arr) {
      let biggestNum = arr[0];
      let smallestNum = arr[0];
      let biggestIdx = 0;
      let smallestIdx = 0;
      arr.forEach((x, idx) => {
          if (x >= biggestNum) {
              biggestNum = x;
              biggestIdx = idx;
          }
          if (x <= smallestNum) {
              smallestNum = x;
              smallestIdx = idx;
          }
      });
      return [smallestIdx, biggestIdx];
  }
}
