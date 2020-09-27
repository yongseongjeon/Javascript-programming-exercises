function solution(n, edge) {
  let isVisited = Array(n).fill(false);
  let distance = Array(n).fill(-1);
  const q = [];
  let temp = [];
  let answer = [];
  
  q.push(1);
  isVisited[0] = true;
  
  while (q.length) {
      let current = q.shift();
      edge.forEach((x) => { 
          if (x.includes(current)) {
              const filter = x.filter((node) => node !== current)[0];
              if (!isVisited[filter - 1]) {
                  q.push(filter)
                  distance[filter - 1] = distance[current - 1] + 1;
              } else {
                  edge.splice(filter - 1, 1);   
              }
          }
      });
  }
}
