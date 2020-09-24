function solution(land) {
  const gameLand = land.concat();
  const getExcludeOneNum = (num) => [0, 1, 2, 3].filter((x) => x !== num);
  for (let i = 1; i < land.length; i++) {
      for (let j = 0; j < 4; j++) {
          gameLand[i][j] = Math.max(gameLand[i][j] + gameLand[i - 1][getExcludeOneNum(j)[0]], 
                                    gameLand[i][j] + gameLand[i - 1][getExcludeOneNum(j)[1]], 
                                    gameLand[i][j] + gameLand[i - 1][getExcludeOneNum(j)[2]]);
      }
  }
  return Math.max(...gameLand[gameLand.length - 1]);
}
