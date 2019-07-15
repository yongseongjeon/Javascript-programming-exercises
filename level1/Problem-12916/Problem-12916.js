function solution(s){
    const pCount = (s.match(/p/gi) || []).length;
    const yCount = (s.match(/y/gi) || []).length;
    return pCount === yCount;
}
