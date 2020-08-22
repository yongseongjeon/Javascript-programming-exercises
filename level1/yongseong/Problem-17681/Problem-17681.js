function solution(n, arr1, arr2) {
  let arr = [];
  
  for (let i = 0; i < arr1.length; i++) {
      arr.push((arr1[i] | arr2[i]).toString(2));
  }
  
  arr = arr.map(x => {
      let row = x.replace(/1/g, '#');
      row = row.replace(/0/g, ' ');
      const m = n - row.length;
      
      if (n === row.length) return row;
      else {
          for (let i = 0; i < m; i++) {
              row = ' ' + row;
          }
          return row;
      }
  });
  
  return arr;
}
