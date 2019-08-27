function solution(s){
    let duplicateStack = [];
    const stringArray = s.split("")
    
    const isEmpty = (arr) => {
        if(arr.length >= 1) return false
        else return true
    }
    
    for(let string of stringArray){
        if(isEmpty(duplicateStack)) duplicateStack.push(string)
        else{
            if(duplicateStack[duplicateStack.length-1] === string){
                duplicateStack.pop()        
            }
            else duplicateStack.push(string)
        }
    }
    return duplicateStack.length >= 1 ? 0 : 1
}
