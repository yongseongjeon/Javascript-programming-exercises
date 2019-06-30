function solution(naturalNum) {
    return String(naturalNum)
            .split("")
            .reverse()
            .map(x => x/1);
}
