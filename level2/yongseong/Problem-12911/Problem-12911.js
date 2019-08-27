function solution(n) {
    const countOfOne = (num) => num.toString(2).split("").filter(x => x != 0).length;
    const originalCountOfOne = countOfOne(n);
    let inputNum = n;
    
    for(let i=0; i<1000000; i++){
        inputNum++
        if(countOfOne(inputNum) === originalCountOfOne){
            return inputNum;
        }
    }
}
