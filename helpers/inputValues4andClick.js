const sel = require('../data/selectors.json');
const exp = require('../data/expected.json');
const data = require('../data/testData.json');

function inputValues4 (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
}

module.exports = inputValues4;