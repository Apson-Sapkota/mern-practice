function printStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let space = ' '.repeat(rows - i);
        let stars = '* '.repeat(i);
        console.log(space + stars);
    }
}
printStars(8);
