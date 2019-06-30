function solution(num) {
    return Array(num)
        .fill(1)
        .map((x, i) => x + i)
        .filter(x => num%x === 0)
        .reduce((acc, val) => acc + val, 0);
}
