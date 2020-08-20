function solution(records) {
  let uid = {};
  const recordArr = [];
  
  for (let record of records) {
      recordArr.push(record.split(" "));
  }
  
  // console.log(recordArr)
  // [[ 'Enter' , 'uid1234', 'Muzi' ],
  //  [ 'Enter' , 'uid4567', 'Prodo'],
  //  [ 'Leave' , 'uid1234'         ],
  //  [ 'Enter' , 'uid1234', 'Prodo'],
  //  [ 'Change', 'uid4567', 'Ryan' ]]
  
  for (let record of recordArr) {
      if (record[0] !== "Leave") {
          uid[record[1]] = record[2];
      }
  }
  
  // console.log(uid)
  // { uid1234: 'Prodo', uid4567: 'Ryan' }
  
  const result = [];
  
  for (let record of recordArr) {
      switch(record[0]) {
          case "Enter":
              result.push(`${uid[record[1]]}님이 들어왔습니다.`);
              break;
          case "Leave":
              result.push(`${uid[record[1]]}님이 나갔습니다.`)
              break;
      }
  }
  
  return result;
}
