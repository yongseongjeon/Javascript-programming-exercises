function solution(progresses, speeds) {
  let works = progresses.map((progress, idx) => {
       return {
           no: idx,
           progress: progress,
           speed: speeds[idx]
       }
  });
  
  let answer = [];
  let finishedWork = [];
  let todayDevelop = 0;
  while (works.length) {
      todayDevelop = 0;
      works.forEach((work, idx) => {
          work.progress += work.speed;
          
          if (work.progress >= 100) {
              finishedWork.push(work);
          }
      });
      works = works.filter(work => work.progress < 100);
      
      finishedWork.forEach(el => {
          let cantDevelop = works.find(work => work.no < el.no);
          if (!cantDevelop) {
              todayDevelop++;
              finishedWork = finishedWork.filter(el2 => el.no !== el2.no);
          }
      });
      
      if (todayDevelop) {
          answer.push(todayDevelop);
      }
  }
  return answer;
}
