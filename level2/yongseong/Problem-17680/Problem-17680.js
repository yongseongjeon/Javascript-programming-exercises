function solution(cacheSize, city) {
  let cache = [];
  let runTime = 0;
  let cities = city.map(x => x.toLocaleUpperCase());
  
  if (cacheSize === 0) return cities.length * 5;
  
  for (let city of cities) {
      if (cache.length < cacheSize) {
          if (cache.includes(city)) {
              cache.push(cache.splice(cache.indexOf(city), 1)[0]);
              runTime += 1;
          }
          else {
              cache.push(city);
              runTime += 5;
          }
      }
      else {
          if (cache.includes(city)) {
              cache.push(cache.splice(cache.indexOf(city), 1)[0]);
              runTime += 1;
          }
          else {
              cache.shift();
              cache.push(city);
              runTime += 5;
          }   
      }
  }
  
  return runTime;
}
