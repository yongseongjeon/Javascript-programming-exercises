function solution(bridge_length, weight, truck_weights) {
    let truckQueue = [];
    let distance = [];
    let elapsedTime = 1;
    while(true){
        // 큐에 들어있는 무게 합 + 들어오려는 트럭 무게가 weight보다 작아?
        if(truckQueue.reduce((acc, val) => acc + val, 0) + truck_weights[0] <= weight){
            truckQueue.push(truck_weights.shift());
            distance.push(1);
        }
        if(distance[0] === bridge_length){
            truckQueue.shift();
            distance.shift();
        }
        elapsedTime++;
        distance = distance.map(x => x+1);
        if(distance.length === 0 && truck_weights.length === 0){
            return elapsedTime;
        }
    }
}
