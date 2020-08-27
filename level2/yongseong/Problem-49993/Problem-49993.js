function solution(skill, skillTrees) {
  let skills = skill.split('');
  let answer = [];
  skillTrees.forEach(x => {
      answer.push(canLearnSkill(skills, x));
  });
  return answer.filter(x => x).length;
  
  function canLearnSkill(skillOrder, learnedSkill) {
      let precedingIdx = [];
      for (let i = 0; i < skillOrder.length; i++) {
          if (learnedSkill.indexOf(skillOrder[i]) !== -1) {
              precedingIdx.push(learnedSkill.indexOf(skillOrder[i]));
          }
          else {
              for (let j = i + 1; j < skillOrder.length; j++) {
                  if (learnedSkill.includes(skillOrder[j])) return false;
              }
          }
      };
      let skill = precedingIdx.concat();
      skill.sort((a, b) => a - b);
      return skill.join('') === precedingIdx.join('');
  }
}
