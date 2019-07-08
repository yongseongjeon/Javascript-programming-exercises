function solution(str) {
    const sortedArray = str.split(" ").sort((a, b) => a-b)
    return sortedArray.filter((val, i) => i === sortedArray.length-1 || i === 0).join(" ")
}
