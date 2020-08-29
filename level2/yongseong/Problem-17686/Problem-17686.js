function solution(files) {
  let fileList = [];
  files.forEach((x, idx) => {
      let regNum = x.match(/[0-9]{1,5}/g)[0];
      const numberIdx = x.indexOf(regNum);
      fileList.push({head:   x.slice(0, numberIdx), 
                     number: regNum, 
                     tail:   x.slice(numberIdx + regNum.length), 
                     idx:    idx});
  });
  fileList.sort((a, b) => {
      const headA = a.head.toLocaleLowerCase();
      const headB = b.head.toLocaleLowerCase();
      if (headA < headB) return -1;
      else if (headA > headB) return 1;
      else {
          if (a.number / 1 === b.number / 1) return a.idx - b.idx;
          return a.number / 1 - b.number / 1;
      }
  });
  const answer = [];
  fileList.forEach(x => {
      answer.push(x.head + x.number + x.tail);
  });
  return answer;
}
