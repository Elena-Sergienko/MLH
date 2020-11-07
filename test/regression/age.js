const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Regression. Age', function () {
    beforeEach(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    describe('Element Age', function () {
        it('TC-4.005 Verify that integer increases by 1 if clicking <+> on spinner button', function () {
            $(sel.inputFields.age).setValue(data.ages.n20);
            $(sel.ageClick.up).click();
            $(sel.ageClick.up).click();
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n22);
        });

        it('TC-4.006 Verify that number decreases by 1 if clicking <-> on spinner button', function () {
            $(sel.inputFields.age).setValue(data.ages.n20);
            $(sel.ageClick.down).click();
            $(sel.ageClick.down).click();
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n18);
        });

        it('TC-4.007 Verify that when input field is empty and <+> is clicked then the value is 1', function () {
            $(sel.ageClick.up).click();
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n1);
        });

        it('TC-4.008 Verify that input field accepts a 1-digit integer', function () {
            $(sel.inputFields.age).setValue(data.ages.n5);
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n5);
        });

        it('TC-4.009 Verify that input field accepts a 1-digit integer', function () {
            $(sel.inputFields.age).setValue(data.ages.twelve);
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.twelve);
        });

        it('TC-4.010 Verify that if input value is longer than a 12-digit integer, error message appears', function () {
            $(sel.inputFields.age).setValue(data.ages.thirteen);
            $(sel.alert.age).waitForDisplayed();
            const alert = $(sel.alert.age).isDisplayed();
            expect(alert).toEqual(true);
        });

        it('TC-4.012 Verify that if input value is a negative integer, submission is not allowed', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.negative, data.typeOfStory.comedy);
            const submitAllowed = $(sel.createButton).isEnabled();
            expect(submitAllowed).toEqual(false);
        });

        it('TC-4.013 Verify that if input value is a floating number, submission is not allowed ', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.floating, data.typeOfStory.comedy);
            const submitAllowed = $(sel.createButton).isEnabled();
            expect(submitAllowed).toEqual(false);
        });

        it('TC-4.014 Verify that input field doesn\'t accept a special character', function () {
            $(sel.inputFields.age).setValue(data.ages.specialCharacter);
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n150);
        });

        it('TC-4.015 Verify that input field doesn\'t accept a letter', function () {
            $(sel.inputFields.age).setValue(data.ages.withLetter);
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n150);
        });
    });
});