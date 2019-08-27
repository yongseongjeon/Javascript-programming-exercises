function solution(numbers){
    return String(numbers)
        .split("")
        .reduce((accumulator, value) => Number(accumulator) + Number(value), 0);
}