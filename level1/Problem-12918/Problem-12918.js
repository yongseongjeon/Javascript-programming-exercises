function solution(s) {
    if(s.length >= 1){
        return s.split("").length === s.split("")
                                .map(x => x.charCodeAt())
                                .filter(x => x < 58)
                                .map(x => String.fromCharCode(x))
                                .length
    }
    else {
        return false;
    }
}
