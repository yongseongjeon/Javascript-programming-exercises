function solution(array, commands) {
    let answerArray = [];
    
    for(let i = 0; i < commands.length; i++) {
    
        let fromThisNumber = commands[i][0] - 1;
        let toThisNumber = commands[i][1];
        let indexNumber = commands[i][2] - 1;
        let slicedArray = array.slice(fromThisNumber, toThisNumber);

        slicedArray.sort(function(a, b){
            return a - b;
        });
        
        answerArray.push(slicedArray[indexNumber]);
    }
    
    return answerArray;
}
