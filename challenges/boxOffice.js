function tickets(peopleInLine) {
    let amount25 = 0;
    let amount50 = 0;
    let amount100 = 0;

    for (let i of peopleInLine) {

        if (i === 100) {
            if (amount25 >= 3) {
                amount25 -= 3;
                amount100++;
            } else if (amount25 >= 1 && amount50 >= 1) {
                amount25 -= 1;
                amount50 -= 1;
                amount100++;
            } else {
                return "NO";
            }
        }

        if (i === 50) {
            if (amount25 >= 1) {
                amount25--;
                amount50++;
            } else {
                return "NO";
            }
        }

        if (i === 25) {
            amount25++;
        }
    }
    return "YES";
}

module.exports = tickets;