function solution(seoul) {
    let indexOfKim = 0;
    seoul.map((x, i) => x === "Kim" ? indexOfKim = i : true);
              return "김서방은 " + indexOfKim + "에 있다";
}
