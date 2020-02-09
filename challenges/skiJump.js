function skiJump(mountain) {
  const jumpLength = (
    (mountain.length * (mountain.length * 1.5) * 9) /
    10
  ).toFixed(2);
  if (jumpLength < 10) {
    return `${jumpLength} metres: He's crap!`;
  } else if (jumpLength >= 10 && jumpLength < 25) {
    return `${jumpLength} metres: He's ok!`;
  } else if (jumpLength >= 25 && jumpLength < 50) {
    return `${jumpLength} metres: He's flying!`;
  } else {
    return `${jumpLength} metres: Gold!!`;
  }
}

module.exports = skiJump;
