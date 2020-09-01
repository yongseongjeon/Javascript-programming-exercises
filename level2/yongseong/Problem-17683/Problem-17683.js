function solution(m, musicinfos) {
  const musicList = musicinfos.map((x) => x.split(','))
                      .map((x, idx) => {
                          return {
                              title: x[2], 
                              playMin: getMin(x[0], x[1]),
                              music: substitutionSharp(x[3]),
                              idx: idx
                          }
                      });
  const playMusic = musicList.map((x) => {
      return {
          title: x.title,
          playMin: x.playMin,
          playMelody: createMusic(x.music, x.playMin),
          idx: x.idx
      }
  });
  let candidate = [];
  const memoryMelody = substitutionSharp(m);
  playMusic.forEach((x) => {
      if (x.playMelody.includes(memoryMelody)) candidate.push(x);
  })
  candidate.sort((a, b) => {
      if (a.playMin === b.playMin) return a.idx - b.idx;
      else return b.playMin - a.playMin;
  });
  return candidate.length ? candidate[0].title : '(None)';
  
  function substitutionSharp(str) {
      while (true) {
          if (!str.includes('#')) break;
          else {
              str = str.replace('C#', 'Q');
              str = str.replace('D#', 'W');
              str = str.replace('F#', 'R');
              str = str.replace('G#', 'T');
              str = str.replace('A#', 'Y');
              // 문제에 없는 음
              str = str.replace('B#', 'U');
              str = str.replace('E#', 'I');
          }
      }
      return str;
  }
  
  function getMin(a, b) {
      const time1 = a.split(':');
      const time2 = b.split(':');
      const hours = time2[0] / 1 - time1[0] / 1;
      const minutes = time2[1] / 1 - time1[1] / 1;
      return 60 * hours + minutes;
  }
  
  function createMusic(music, playMin) {
      const sum = [];
      for (let i = 0; i < playMin; i++) {
          sum.push(music[i % music.length]);
      }
      return sum.join('');
  }
}
