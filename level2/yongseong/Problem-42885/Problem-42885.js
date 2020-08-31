function solution(people, limit) {
  people.sort((a, b) => a - b);
  let ship = [];
  let answer = 0;
  while (people.length || ship.length) {
      // 가장 무거운 사람 배에 탑승
      if (!ship.length) ship.push(people.pop());
      // 가장 가벼운 사람 탈 수 있는지 확인
      if (limit >= people[0] + getShipWeight(ship)) ship.push(people.shift());
      else {
          ship = [];
          answer++;
      }
  }
  return answer;
  
  function getShipWeight(arr) {
      if (arr.length === 0) return 0;
      return arr.reduce((acc, people) => acc + people);
  }
}
