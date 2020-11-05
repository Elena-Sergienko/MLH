const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json')

describe('Inputs', function () {
    beforeEach(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    describe('Input fields are displayed', function () {
        it('TC-2.003 Verify that Name field is present', function () {
            const name = $(sel.inputFields.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-3.003 Verify that radio button he is present', function () {
            const gender = $$(sel.inputFields.gender)[data.gender.he].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-3.004 Verify that radio button she is present', function () {
            const gender = $$(sel.inputFields.gender)[data.gender.she].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-3.005 Verify that radio button it is present', function () {
            const gender = $$(sel.inputFields.gender)[data.gender.it].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-4.003 Verify that Age field is present', function () {
            const label = $(sel.inputFields.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-5.003 Verify that input field Type of Story is present', function () {
            const label = $(sel.inputFields.story).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-6.003 Verify that Image input box is present', function () {
            const label = $(sel.inputFields.image).isDisplayed();
            expect(label).toEqual(true);
        });
    });
    describe('Create button is displayed and correct', function () {
        it('TC-8.001 Verify that submit button is present', function () {
            const label = $(sel.createButton).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-8.002 Verify that submit button name is "Create!"', function () {
            const label = $(sel.createButton).getText();
            expect(label).toEqual(exp.createButton);
        });
    });

    describe('Placeholder texts are correct', function () {
        it('TC-2.004 Verify that placeholder text is Hero\'s name', function () {
            const placeHolder = $(sel.inputFields.name).getAttribute('placeholder');
            expect(placeHolder).toEqual(exp.placeholders.name);
        });

        it('TC-4.004 Verify that placeholder text is Hero\'s age', function () {
            const placeHolder = $(sel.inputFields.age).getAttribute('placeholder');
            expect(placeHolder).toEqual(exp.placeholders.age);
        });

        it('TC-5.004 Verify that placeholder text is "Type of the story"', function () {
            const placeHolder = $(sel.placeholderType).getText();
            expect(placeHolder).toEqual(exp.placeholders.type);
        });

        it('TC-6.004 Verify that placeholder text is "drag and drop your image here or browse"', function () {
            const placeHolder = $(sel.placeholderImage).getText();
            expect(placeHolder).toEqual(exp.placeholders.image);
        });

    });

    describe('Radio buttons are Clickable', function () {
        it('TC-3.007 Verify that radio button he is clickable', function () {
            const clickable = $$(sel.radioButtonsArray)[data.gender.he].isClickable();
            expect(clickable).toEqual(true);
        });

        it('TC-3.008 Verify that radio button she is clickable', function () {
            const clickable = $$(sel.radioButtonsArray)[data.gender.she].isClickable();
            expect(clickable).toEqual(true);
        });

        it('TC-3.009 Verify that radio button it is clickable', function () {
            const clickable = $$(sel.radioButtonsArray)[data.gender.it].isClickable();
            expect(clickable).toEqual(true);
        });
    });

});