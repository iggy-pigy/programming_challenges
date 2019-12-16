function tickets(peopleInLine) {
    const sum = peopleInLine.reduce((accumulator, currentVal) => {
        if ((currentVal - 25) > accumulator) {
            return "NO";
        } else {
            return accumulator + currentVal;
        }
    });
    return sum;
}

module.exports = tickets;