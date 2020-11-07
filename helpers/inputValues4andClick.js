const sel = require('../data/selectors.json');

function inputValues4andClick (name, gender, age, storyType){
    $(sel.inputFields.name).setValue(name);
    $$(sel.inputFields.gender)[gender].click();
    $(sel.inputFields.age).setValue(age);
    $(sel.inputFields.story).click();
    $$(sel.storyType)[storyType].click();
    $(sel.createButton).click();
}

module.exports = inputValues4andClick;