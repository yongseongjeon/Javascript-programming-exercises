function solution(number) {
    const string = String(number);
    let answerArray = [];
    let answerString = "";
    
    for(let word of string){
        answerArray.push(word/1);
    }
    const sortedArray = answerArray.sort((a, b) => b - a);
    for(let word of sortedArray){
        answerString += word;
    }
    return answerString/1;
}