function skiJump(mountain) {
    var height = 0;
    for (i = 0; i < mountain.length; i++) {
        height += 1;
    }
    var speed = height * 1.5;
    var jumpLenght = (height * speed * 9) / 10;
    var roundedJumpLenght = jumpLenght.toFixed(2);
}

module.exports=skiJump;