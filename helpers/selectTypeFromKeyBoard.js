const sel = require('../data/selectors.json');

function selectTypeFromKeyBoard(n) {
    $(sel.storyClick).click();

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push('ArrowDown');
    }

    arr.push("Enter");
    return arr;
}

module.exports = selectTypeFromKeyBoard;