function solution(integer, naturalNum) {
    return Array(naturalNum).fill(integer).map((element, index) => element * (index+1));
}
