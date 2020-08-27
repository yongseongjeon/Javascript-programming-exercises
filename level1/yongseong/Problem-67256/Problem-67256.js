function solution(numbers, hand) {
  let answer = '';
  let leftLocation = [0, 0];
  let rightLocation = [2, 0];
  const keyLocation = {1: [0, 3], 2: [1, 3], 3: [2, 3],
                       4: [0, 2], 5: [1, 2], 6: [2, 2],
                       7: [0, 1], 8: [1, 1], 9: [2, 1],
                                  0: [1, 0]}
  
  for (let i = 0; i < numbers.length; i++) {
      const key = numbers[i];
      if ([1, 4, 7].includes(key)) {
          answer += 'L';
          leftLocation = keyLocation[key];
          continue;
      }
      else if ([3, 6, 9].includes(key)) {
          answer += 'R';
          rightLocation = keyLocation[key];
          continue;
      }
      
      // 거리 계산
      const leftDistance = getDistance(leftLocation, keyLocation[key]);
      const rightDistance = getDistance(rightLocation, keyLocation[key]);
      
      // 손 이동
      if (leftDistance < rightDistance) answer += 'L';
      else if (leftDistance > rightDistance) answer += 'R';
      else if (hand === 'left') answer += 'L';
      else answer += 'R';
      
      // 손 위치 갱신
      if (answer[answer.length - 1] === 'L') leftLocation = keyLocation[key];
      else rightLocation = keyLocation[key];
  };
  
  return answer;
  
  function getDistance(a, b) {
      const distanceX = Math.abs(a[0] - b[0]);
      const distanceY = Math.abs(a[1] - b[1]);
      
      return distanceX + distanceY;
  }
}
