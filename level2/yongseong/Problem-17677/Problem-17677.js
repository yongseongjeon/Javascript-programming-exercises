function solution(str1, str2) {
  let set1 = str1.toLocaleLowerCase();
  let set2 = str2.toLocaleLowerCase();
  
  set1 = twoLengthSet(set1);
  set2 = twoLengthSet(set2);
  
  if (set1.length === 0 && set2.length === 0) return 65536;
  
  const answer = getIntersection(set1, set2).length / getUnion(set1, set2).length;
  return Math.floor(answer * 65536);
  
  function getIntersection(set1, set2) {
      const intersection = [];
      const set = set2.concat();
      set1.forEach((x, idx) => {
          if (set.includes(x)) {
              intersection.push(set.splice(set.indexOf(x), 1)[0]);
          }
      });
      return intersection;
  }
  
  function getUnion(set1, set2) {
      const union = [];
      const set = set2.concat();
      const intersection = getIntersection(set1, set2);
      set1.forEach(x => set.push(x));
      intersection.forEach(x => {
          if (set.includes(x)) {
              set.splice(set.indexOf(x), 1);
          }
      });
      return set;
  }
  
  function twoLengthSet(set) {
      const twoLengthSet = [];
      for (let i = 0; i < set.length-1; i++) {
          if (isAlphabet(set[i], set[i + 1])) {
              twoLengthSet.push(set[i] + set[i + 1]);
          }
      }
      return twoLengthSet;
  }
  
  function isAlphabet(str1, str2) {
      const result1 = str1.charCodeAt() >= 97 && str1.charCodeAt() <= 122;
      const result2 = str2.charCodeAt() >= 97 && str2.charCodeAt() <= 122;
      return result1 && result2;
  }
}
