function skiJump(mountain) {
    var height = 0;
    for (i = 0; i < mountain.length; i++) {
        height += 1;
    }
    var speed = height * 1.5;
    var jumpLenght = (height * speed * 9) / 10;
    var roundedJumpLenght = Math.round(jumpLenght * 100) / 100;
    if (roundedJumpLenght < 10) {
        return `${roundedJumpLenght} metres: He's crap!`
    } else if (roundedJumpLenght >= 10 && roundedJumpLenght < 25) {
        return `${roundedJumpLenght} metres: He's ok!`
    } else if (roundedJumpLenght >= 25 && roundedJumpLenght < 50) {
        return `${roundedJumpLenght} metres: He's flying!`
    } else {
        return `${roundedJumpLenght} metres: Gold!!`
    };
}

module.exports = skiJump;