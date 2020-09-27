function solution(n, edge) {
  let isVisited = Array(n).fill(false);
  let distance = Array(n).fill(0);
  const q = [];
  
  q.push(1);
  isVisited[0] = true;
  
  while (q.length) {
      let current = q.shift();
      for (let i = 0; i < edge.length; i++) {
          if (edge[i].includes(current)) {
              const nextNode = edge[i][0] === current ? edge[i][1] : edge[i][0];
              if (!isVisited[nextNode - 1]) {
                  q.push(nextNode);
                  isVisited[nextNode - 1] = true;
                  distance[nextNode - 1] = distance[current - 1] + 1;
              }
          }
      }
  }
  const maxNum = Math.max(...distance);
  return distance.filter((num) => num === maxNum).length;
}
