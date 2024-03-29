const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const code = require('../../data/codes.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Regression. Gender', function () {

    beforeEach(() => {
        browser.refresh();
    });

    describe('Gender', function () {
        it('TC- Verify that the user can check gender "he"', function () {  // .getAttribute()
            $$(sel.inputFields.gender)[data.gender.he].click();
            const checked = $$(sel.inputFields.gender)[data.gender.he].getAttribute('class');
            expect(checked).toEqual('ant-radio ant-radio-checked');
        });

        it('TC- Verify that the user can check gender "she"', function () { // .toBeChecked()
            $$(sel.inputFields.gender)[data.gender.she].click();
            const checked1 = $$(sel.genderIsChecked)[1];
            expect(checked1).toBeChecked();
        });

        it('TC- Verify that the user can check gender "it"', function () {  // .isSelected()
            $$(sel.inputFields.gender)[data.gender.it].click();
            const checked2 = $$(sel.genderIsChecked)[2].isSelected();
            expect(checked2).toEqual(true);
        });

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

        it.skip('TC-3.006.1 Verify that the selection can be changed using the keyboard arrow-right (he -> she)', function () {
            $$(sel.inputFields.gender)[data.gender.he].click();
            browser.keys([code.right])
            const checked1 = $(sel.genderChecked).getAttribute('value');
            expect(checked1).toEqual(exp.gender.she);
        });

        it.skip('TC-3.006.2 Verify that the selection can be changed using the keyboard arrow-right (he -> she -> it)', function () {
            $$(sel.inputFields.gender)[data.gender.he].click();
            browser.keys([code.right.repeat(2)]);
            const checked2 = $(sel.genderChecked).getAttribute('value');
            expect(checked2).toEqual(exp.gender.it);
        });

        it.skip('TC-3.006.3 Verify that the selection can be changed using the keyboard arrow-right (it -> he)', function () {
            $$(sel.inputFields.gender)[data.gender.it].click();
            browser.keys([code.right])
            const checked2 = $(sel.genderChecked).getAttribute('value');
            expect(checked2).toEqual(exp.gender.he);
        });

        it.skip('TC-3.006.4 Verify that the selection can be changed using the keyboard arrow-left (he -> it)', function () {
            $$(sel.inputFields.gender)[data.gender.he].click();
            browser.keys([code.left])
            const checked1 = $(sel.genderChecked).getAttribute('value');
            expect(checked1).toEqual(exp.gender.it);
        });

        it.skip('TC-3.006.5 Verify that the selection can be changed using the keyboard arrow-left (he -> it - > she)', function () {
            $$(sel.inputFields.gender)[data.gender.he].click();
            browser.keys([code.left.repeat(2)]);
            const checked1 = $(sel.genderChecked).getAttribute('value');
            expect(checked1).toEqual(exp.gender.she);
        });

        it.skip('TC-3.006.6 Verify that the selection can be changed using the keyboard arrow-left (she -> he)', function () {
            $$(sel.inputFields.gender)[data.gender.she].click();
            browser.keys([code.left]);
            const checked1 = $(sel.genderChecked).getAttribute('value');
            expect(checked1).toEqual(exp.gender.he);
        });
    });
});