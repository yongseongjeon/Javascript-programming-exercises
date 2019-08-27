function solution(n) {
    const squareRoot = Math.sqrt(n);
    return Number.isInteger(squareRoot) ? Math.pow(squareRoot+1, 2) : -1
}
