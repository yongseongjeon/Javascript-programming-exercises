function solution(s){
    const isEmpty = (arr) => {
        if(arr.length >= 1) return false
        else return true
    }
    
    let bracketStack = [];
    
    for(let bracket of s.split("")){
        if(isEmpty(bracketStack)) {
            if(bracket === ")"){
                return false
            }
            else{
                bracketStack.push(bracket)   
            }
        }
        else{
            if(bracket === ")") {
                bracketStack.pop()
            }
            else{
                bracketStack.push(bracket)   
            }
        }
    }
    return bracketStack.length >= 1 ? false : true
}
