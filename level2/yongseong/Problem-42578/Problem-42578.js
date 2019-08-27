function solution(clothes) {
    let clothesTypes = clothes;
    let temp = 1;
    
    clothesTypes = clothes.map(val => val[1]).sort().reduce((pre, val) => {
        pre[val] = ++pre[val] || 1;
        return pre;
    }, {});
    
    for(var clothesType in clothesTypes){
        temp = temp * ++clothesTypes[clothesType];
    }
    return temp-1;
}