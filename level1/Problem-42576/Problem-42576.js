function solution(participants, completion) {
    const sortedParticipants = participants.sort();
    const sortedcompletion = completion.sort();
    
    return sortedParticipants.filter((x, i) => x !== sortedcompletion[i])[0];
}
