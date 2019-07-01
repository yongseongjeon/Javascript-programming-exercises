function solution(num) {
    return num % String(num).split("").map(x => x/1).reduce((acc, val) => acc + val) === 0;
}
