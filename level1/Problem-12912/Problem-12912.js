function solution(a, b) {
    return Array(a > b ? a - b + 1 : b - a + 1)
        .fill(a > b ? b : a)
        .map((x, i) => x + i)
        .reduce((acc, val) => acc + val);
}
