const sel = require('../data/selectors.json');

function inputValues4andClick (name, gender, age, storyType){
    $(sel.inputFields.name).setValue(name);
    $$(sel.inputFields.gender)[gender].click();
    $(sel.inputFields.age).setValue(age);
    $(sel.inputFields.story).click();
    $$(sel.typeOfStory)[storyType].waitForDisplayed();
    $$(sel.typeOfStory)[storyType].click();
    $(sel.createButton).click();
}

module.exports = inputValues4andClick;