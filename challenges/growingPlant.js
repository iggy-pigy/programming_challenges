
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    const daysRequired = Math.max(Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)), 0) + 1;
    return daysRequired;
}

module.exports = growingPlant;