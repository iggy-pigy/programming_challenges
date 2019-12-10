function skiJump(mountain) {
    const jumpLenght = ((mountain.length * (mountain.length * 1.5) * 9) / 10).toFixed(2)
    if (jumpLenght < 10) {
        return `${jumpLenght} metres: He's crap!`
    } else if (jumpLenght >= 10 && jumpLenght < 25) {
        return `${jumpLenght} metres: He's ok!`
    } else if (jumpLenght >= 25 && jumpLenght < 50) {
        return `${jumpLenght} metres: He's flying!`
    } else {
        return `${jumpLenght} metres: Gold!!`
    };
}

module.exports = skiJump;