const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Regression. Age', function () {
    before(() => {
        browser.url('');
        browser.maximizeWindow();
    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('Test suite for Element Age', function () {
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
            let age;
            for (let i = 0; i < data.ages.oneDigitInteger.length; i++) {
                $(sel.inputFields.age).refresh();
                $(sel.inputFields.age).setValue(data.ages.oneDigitInteger[i]);
                age = $(sel.inputFields.age).getValue();
                expect(age).toEqual(exp.ages.oneDigitInteger[i]);
            }
        });

        it('TC-4.008.1 Verify that input field accepts numbers', function () {

            for (let i = +data.ages.n10; i <= +data.ages.n29; i++) {
                let number = i + 1;

                $(sel.inputFields.age).refresh();
                $(sel.inputFields.age).setValue(number);
                let age = $(sel.inputFields.age).getValue();
                expect(age).toEqual('' + (i + 1));
            }

            for (let i = 1; i <= +data.ages.n10; i++) {
                let number = +data.ages.n10 * i;

                $(sel.inputFields.age).refresh();
                $(sel.inputFields.age).setValue(number);
                let age = $(sel.inputFields.age).getValue();
                expect(age).toEqual('' + (+exp.ages.n10 * i));
            }

            for (let i = 1; i < +data.ages.twelveDigitInteger.last; i *= 100) {
                let number = +data.ages.n10 * i;

                $(sel.inputFields.age).refresh();
                $(sel.inputFields.age).setValue(number);
                let age = $(sel.inputFields.age).getValue();
                expect(age).toEqual('' + (+exp.ages.n10 * i));
            }
        });

        it('TC-4.009 Verify that input field accepts a 12-digit integer', function () {
            let result;
            let first = +data.ages.twelveDigitInteger.first;
            let last = +data.ages.twelveDigitInteger.last;
            let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            let expectFirst = +exp.ages.twelveDigitInteger.first;

            for (let j = 0; j < integers.length; j++) {
                for (let i = integers[j]; i <= last; i *= 10) {
                    result = first + i - 1;

                    $(sel.inputFields.age).refresh();
                    $(sel.inputFields.age).setValue(result);
                    let age = $(sel.inputFields.age).getValue();
                    expect(age).toEqual('' + (expectFirst + i - 1));
                }
            }
        });

        it('TC-4.010 Verify that if input value is longer than a 12-digit integer, error message appears', function () {
            $(sel.inputFields.age).setValue('' + (+data.ages.twelveDigitInteger.last + 1));
            $(sel.alert.age).waitForDisplayed();
            const alert = $(sel.alert.age).isDisplayed();
            expect(alert).toEqual(true);

            $(sel.inputFields.age).setValue(data.ages.thirteen);
            $(sel.alert.age).waitForDisplayed();
            const alert1 = $(sel.alert.age).isDisplayed();
            expect(alert1).toEqual(true);
        });

        it('TC-4.010.1 Verify text alert', function () {
            $(sel.inputFields.age).setValue(data.ages.thirteen);
            $(sel.alert.age).waitForDisplayed();

            const textAlert = $(sel.alert.age).getText();
            expect(textAlert).toEqual(exp.alert.age);
        });

        it('TC-4.012 Verify that if input value is a negative integer, submission is not allowed', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.negative, data.typeOfStory.comedy);
            const submitAllowed = $(sel.createButton).isEnabled();
            expect(submitAllowed).not.toEqual(true);
        });

        it('TC-4.012.1 Verify that if input value is a negative integer, error message appears', function () {
            $(sel.inputFields.age).setValue(data.ages.negative);
            $(sel.alert.age).waitForDisplayed();
            const errorMessage = $(sel.alert.age).getText();
            expect(errorMessage).toEqual(exp.alert.age);
        });

        it('TC-4.013 Verify that if input value is a floating number, submission is not allowed ', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.floating, data.typeOfStory.comedy);
            const submitAllowed = $(sel.createButton).isEnabled();
            expect(submitAllowed).not.toEqual(true);
        });

        it('TC-4.013.1 Verify that if input value is a floating number, error message appears ', function () {
            $(sel.inputFields.age).setValue(data.ages.floating);
            $(sel.alert.age).waitForDisplayed();
            const errorMessage = $(sel.alert.age).getText();
            expect(errorMessage).toEqual(exp.alert.age);
        });

        it('TC-4.014 Verify that input field doesn\'t accept a special character', function () {
            $(sel.inputFields.age).setValue(data.ages.specialCharacter);
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n150);
        });

        it('TC-4.015 Verify that age cannot be accepted with the letter', function () {
            inputValues4(data.names.LadyBug, data.gender.she, data.ages.withLetter, data.typeOfStory.comedy);
            const age = $(sel.inputFields.age).getValue();
            expect(age).toEqual(exp.ages.n150);
        });
    });
});