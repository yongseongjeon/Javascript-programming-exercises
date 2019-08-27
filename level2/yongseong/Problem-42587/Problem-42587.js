function solution(priorities, location) {
    // 큐 안에 인쇄목록을 순서대로 삽입
    let printList = priorities;
    let printLocation = location;

    // 인쇄 순서 선언
    let printOrder = 1;

    // 큐가 빌 때까지 반복
    while(printList.length > 0){
        // 첫 번째 위치한 인쇄 중요도가 제일 높아?
        if(printList[0] === printList.slice()
           .sort(function(a, b){return b - a})[0]){
            // 제일 앞에 있는 문서가 내가 선택한 문서야?
            if(printLocation === 0){
                return printOrder;
            }
            // 제일 앞에 있는 문서가 내가 선택한 문서가 아니야?
            else{
            printList.shift();
            printLocation--;
            printOrder++;
            }
        }
        // 첫 번째 위치한 인쇄 중요도가 제일 높지 않아?
        else{
            // 제일 앞에 있는 문서가 내가 선택한 문서야?
            if(printLocation === 0){
                printLocation = printList.length - 1;
                // 첫 번째 원소 디큐 후 엔큐
                printList.push(printList.shift());
            }
            // 제일 앞에 있는 문서가 내가 선택한 문서가 아니야?
            else{
            printList.push(printList.shift());
            printLocation--;
            }
        }
    }
}