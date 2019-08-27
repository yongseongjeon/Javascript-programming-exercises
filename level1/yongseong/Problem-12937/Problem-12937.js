function solution(num) {
    return [num].map(x => x%2 === 0 ? "Even" : "Odd")[0];
}
