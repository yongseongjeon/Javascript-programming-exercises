function solution(dirs) {
  let previous = [0, 0];
  let current = [0, 0];
  let firstTimeRoute = [];
  dirs.split('').forEach((command) => {
      if (command === 'U' && current[1] < 5) current[1]++;
      else if (command === 'D' && current[1] > -5) current[1]--;
      else if (command === 'R' && current[0] < 5) current[0]++;
      else if (command === 'L' && current[0] > -5) current[0]--;
      let previousLocation = '' + previous[0] + previous[1];
      let currentLocation = '' + current[0] + current[1];
      let route = previousLocation + currentLocation;
      if (!firstTimeRoute.includes(route) && previousLocation !== currentLocation) {
          firstTimeRoute.push(previousLocation + currentLocation);
          firstTimeRoute.push(currentLocation + previousLocation);
      }
      previous = current.concat();
  });
  return firstTimeRoute.length / 2;
}
