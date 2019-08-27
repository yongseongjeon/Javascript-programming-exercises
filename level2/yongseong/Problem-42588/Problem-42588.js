function solution(heights) {
    let leftHeights = [heights[0]];
    let leftHeightsIndex;
    let signalArray = [0];

    // heights 길이-1 만큼 반복
    for(let i = 1; i<heights.length; i++){
        // 왼쪽 배열에 heights[i] 보다 큰 숫자 있어?
        if(leftHeights.filter(x => x>heights[i]).length > 0){
            leftHeightsIndex = leftHeights.length-1
            for(let j = 0; j<leftHeights.length; j++){
                // 왼쪽 배열의 원소가 heights[i]보다 커?
                if(leftHeights[leftHeightsIndex] > heights[i]){
                    // 신호 배열에 왼쪽 배열의 인덱스 푸시
                    signalArray.push(leftHeightsIndex);
                }
                // 왼쪽 배열의 원소가 heights[i]보다 작아?
                else{
                    leftHeightsIndex--;
                }
            }
        }
        // 왼쪽 배열에 heights[i] 보다 큰 숫자 없어?
        else{
            signalArray.push(0);
        }
    }
    return signalArray;
}