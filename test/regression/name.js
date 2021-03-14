const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4andClick = require('../../helpers/inputValues4andClick');

describe('Regression. Name', function () {

    beforeEach(() => {
        browser.refresh();
    });

    describe('Test suite for Element Name', function () {

        describe('Input field Name accepts letters', function () {
            it('TC-2.006 Verify that input field accepts upper case letters', function () {
                $(sel.inputFields.name).setValue(data.names.FIONA);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.FIONA);
            });

            it('TC-2.006.1 Verify that input field accepts lower case letters', function () {
                $(sel.inputFields.name).setValue(data.names.shrek);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.shrek);
            });

            it('TC-2.006.2 Verify that input field accepts upper case letter', function () {
                for (let i = 0; i < data.names.letters.length; i++) {
                    browser.refresh();
                    let nameInput = data.names.letters[i].toUpperCase();
                    let nameExpect = exp.names.letters[i].toUpperCase();

                    $(sel.inputFields.name).setValue(nameInput);
                    const getName = $(sel.inputFields.name).getValue();
                    expect(getName).toEqual(nameExpect);
                }
            });

            it('TC-2.006.3 Verify that input field accepts upper case letter and "."', function () {
                for (let i = 0; i < data.names.letters.length; i++) {
                    browser.refresh();
                    let nameInput = data.names.letters[i].toUpperCase() + data.names.symbols[0];
                    let nameExpect = exp.names.letters[i].toUpperCase() + exp.names.symbols[0];

                    $(sel.inputFields.name).setValue(nameInput);
                    const getName = $(sel.inputFields.name).getValue();
                    expect(getName).toEqual(nameExpect);
                }
            });

            it('TC-2.006.4 Verify that input field accepts lower case letter', function () {
                for (let i = 0; i < data.names.letters.length; i++) {
                    browser.refresh();

                    $(sel.inputFields.name).setValue(data.names.letters[i]);
                    const getName = $(sel.inputFields.name).getValue();
                    expect(getName).toEqual(exp.names.letters[i]);
                }
            });
        });

        describe('Input field accepts digits', function () {

            it('TC-2.007 Verify that input field accepts digits', function () {
                $(sel.inputFields.name).setValue(data.names.name0123456789);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.name0123456789);
            });

            it('TC-2.007.1 Verify that input field accepts 1 digit', function () {
                for (let i = 0; i < data.names.digit.length; i++) {
                    browser.refresh();
                    $(sel.inputFields.name).setValue(data.names.digit[i]);
                    const getName = $(sel.inputFields.name).getValue();
                    expect(getName).toEqual(exp.names.digit[i]);
                }
            });
        });

        describe('Input field accepts special characters', function () {
            it('TC-2.008 Verify that input field accepts special characters', function () {
                $(sel.inputFields.name).setValue(data.names.nameSymbols);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.nameSymbols);
            });

            it('TC-2.008.1 Verify that input field accepts special character', function () {
                for (let i = 0; i < data.names.symbols.length; i++) {
                    browser.refresh();
                    $(sel.inputFields.name).setValue(data.names.symbols[i]);
                    const getName = $(sel.inputFields.name).getValue();
                    expect(getName).toEqual(exp.names.symbols[i]);
                }
            });
        });

        describe('Input field accepts 70 symbols', function () {
            it('TC-2.010 Verify that input field accepts 70 symbols(digits)', function () {
                $(sel.inputFields.name).setValue(data.names.d70);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.d70);
            });

            it('TC-2.010.1 Verify that input field accepts 70 symbols(letters)', function () {
                $(sel.inputFields.name).setValue(data.names.l70);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.l70);
            });

            it('TC-2.011 Verify that input field accepts between 1 - 70 symbols', function () {
                $(sel.inputFields.name).setValue(data.names.Shrek + data.names.d50 + data.names.symbols[1]);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.Shrek + exp.names.d50 + exp.names.symbols[1]);
            });

            it('TC-2.011.1 Verify that input field accepts between 1 - 70 with space', function () {
                $(sel.inputFields.name).setValue(data.names.withSpace);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.withSpace);
            });

            it('TC-2.012 Verify that if input value is no longer than 70 symbols (digits)', function () {
                $(sel.inputFields.name).setValue(data.names.d71);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.d70);
            });

            it('TC-2.012.1 Verify that if input value is no longer than 70 symbols (letters)', function () {
                $(sel.inputFields.name).setValue(data.names.l70 + data.names.letters[18]);
                const getName = $(sel.inputFields.name).getValue();
                expect(getName).toEqual(exp.names.l70);
            });

            it('TC-2.012.2 Verify that if input value is longer than 70 letters, an error warning appear', function () {
                $(sel.inputFields.name).setValue(data.names.l70 + data.names.letters[18]);
                $(sel.alert.name).waitForDisplayed();
                const alert = $(sel.alert.name).isDisplayed();
                expect(alert).toEqual(true);
            });

            it('TC-2.012.3 Verify that if input value is longer than 70 letters, an error warning appear with text', function () {
                $(sel.inputFields.name).setValue(data.names.l70 + data.names.letters[18]);
                $(sel.alert.name).waitForDisplayed();

                const textAlert = $(sel.alert.name).getText();
                expect(textAlert).toEqual(exp.alert.name);
            });
        });

        describe('Spaces before and after name', function () {
            it('TC-2.013 Verify that spaces before and after name are trimmed', function () {
                inputValues4andClick(data.names.withSpaces, data.gender.it, data.ages.n5, data.typeOfStory.comedy);
                const text = $(sel.story.textOfStory).getText();
                const wordsInStory = text.split(' ');
                let result = true;
                for (let i = 0; i < wordsInStory.length; i++){
                    if(wordsInStory[i] === ''){
                        result = false;
                    }
                }
                expect(result).toEqual(true);
            });
        });
    });
});
