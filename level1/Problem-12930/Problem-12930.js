function solution(string) {
    const pattern = /(\w)(\w)/g;
    const upperString = string.toUpperCase();
    return upperString.replace(pattern, s => s[0] + s[1].toLowerCase());
}
