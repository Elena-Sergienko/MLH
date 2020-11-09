const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Regression. Gender', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('Multiple choices', function () {
        it('TC-3.006 Verify that submit button is disabled if none of the options are selected', function () {
            inputValues4(data.names.FIONA, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            $$(sel.inputFields.gender)[data.gender.she].click();
            $(sel.createButton).click();
            const text = $(sel.story.textOfStory);
            expect(text).toHaveTextContaining(exp.story.genderInStory.she);
        });
    });
});