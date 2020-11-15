const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const code = require('../../data/codes.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Regression. Gender', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('Multiple choices', function () {

        it('TC-3.006 Verify that multiple selection is not possible', function () {
            inputValues4(data.names.FIONA, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            $$(sel.inputFields.gender)[data.gender.she].click();
            $(sel.createButton).click();
            const text = $(sel.story.textOfStory);
            expect(text).toHaveTextContaining(exp.story.genderInStory.she);
        });
    });

    describe('Change choices', function () {

        it('TC-3.006.1 Verify that the selection can be changed using the keyboard arrow-right', function () {
            $$(sel.inputFields.gender)[data.gender.he].click();
            browser.keys([code.right])
            const checked1 = $(sel.genderChecked).getAttribute('value');
            expect(checked1).toEqual(exp.gender.she);

            browser.keys([code.right])
            const checked2 = $(sel.genderChecked).getAttribute('value');
            expect(checked2).toEqual(exp.gender.it);

            browser.keys([code.right])
            const checked3 = $(sel.genderChecked).getAttribute('value');
            expect(checked3).toEqual(exp.gender.he);
        });

        it('TC-3.006.2 Verify that the selection can be changed using the keyboard arrow-left', function () {
            $$(sel.inputFields.gender)[data.gender.he].click();
            browser.keys([code.left])
            const checked1 = $(sel.genderChecked).getAttribute('value');
            expect(checked1).toEqual(exp.gender.it);

            browser.keys([code.left])
            const checked2 = $(sel.genderChecked).getAttribute('value');
            expect(checked2).toEqual(exp.gender.she);

            browser.keys([code.left])
            const checked3 = $(sel.genderChecked).getAttribute('value');
            expect(checked3).toEqual(exp.gender.he);
        });
    });
});