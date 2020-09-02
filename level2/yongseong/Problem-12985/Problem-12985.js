function solution(n, a, b) {
  let arr = Array(n).fill(1).map((x, idx) => x + idx);
  let result = Math.log2(n);
  while (true) {
      let leftArr = arr.slice(0, arr.length / 2);
      let rightArr = arr.slice(arr.length / 2, arr.length);
      if (leftArr.includes(a) && leftArr.includes(b)) {
          arr = leftArr;
          result--;
      }
      else if (rightArr.includes(a) && rightArr.includes(b)) {
          arr = rightArr;
          result--;
      }
      else break;
  }
  return result;
}
