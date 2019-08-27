function solution(phoneNumber) {
    return phoneNumber
            .split("")
            .map((element, index) => index < phoneNumber.length-4 ? "*" : element)
            .join("");
}
