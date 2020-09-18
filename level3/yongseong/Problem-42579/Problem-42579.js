function solution(genres, plays) {
  let music = genres.map((genre, idx) => {
      return {
          genre: genre,
          play: plays[idx],
          idx: idx
      }
  });
  let genrePlayCount = [];
  music.forEach((x) => {
      let thisGenre = genrePlayCount.find((genrePlay) => genrePlay.genre === x.genre);
      if (thisGenre) thisGenre.play += x.play;
      else genrePlayCount.push({genre: x.genre, play: x.play});
  });
  genrePlayCount.sort((a, b) => b.play - a.play);
  let result = [];
  genrePlayCount.forEach((genrePlay) => {
      const rankSong = music.filter((x) => x.genre === genrePlay.genre).sort((a, b) => {
          if (a.play === b.play) return a.idx - b.idx;
          return b.play - a.play;
      });
      if (rankSong.length > 1) result.push(rankSong[0].idx, rankSong[1].idx);
      else result.push(rankSong[0].idx);
  })
  return result;
}
