const sel = require('../data/selectors.json');

function inputValues4(name, gender, age, storyType) {

    if (gender === null) {
        $(sel.inputFields.name).setValue(name);
        $(sel.inputFields.age).setValue(age);
        $(sel.inputFields.story).click();
        browser.keys(['ArrowDown'.repeat(storyType), 'Enter']);
    } else if (storyType === null) {
        $(sel.inputFields.name).setValue(name);
        $$(sel.inputFields.gender)[gender].click();
        $(sel.inputFields.age).setValue(age);
    } else {
        $(sel.inputFields.name).setValue(name);
        $$(sel.inputFields.gender)[gender].click();
        $(sel.inputFields.age).setValue(age);
        $(sel.inputFields.story).click();
        browser.keys(['ArrowDown'.repeat(storyType), 'Enter']);
    }

}

module.exports = inputValues4;