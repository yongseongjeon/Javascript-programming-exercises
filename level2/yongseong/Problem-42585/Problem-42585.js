function solution(arrangements) {
    let stick = [];
    let stickCount = 0;
    
    for(let arrangement of arrangements){
        stick.push(arrangement);
        if(stick[stick.length-1] === '('){
            stickCount++;
        }
        else if(stick[stick.length-1] === ')'){
            if(stick[stick.length-2] === '('){
                stickCount--;
                stick.pop();
                stick.pop();
                stickCount += stick.filter(x => x === '(').length;
            }
            else{
                stick.pop();
                stick.pop();   
            }
        }
    }
    return stickCount;
}