const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');


describe('Regression. Name', function () {
    beforeEach(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    describe('Element Name', function () {
        it('TC-2.006 Verify that input field accepts upper case letters', function () {
            $(sel.inputFields.name).setValue(data.names.FIONA);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual(data.names.FIONA);
        });

        it('TC-2.007 Verify that input field accepts digits', function () {
            $(sel.inputFields.name).setValue(data.names.name0123456789);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual(data.names.name0123456789);
        });

        it('TC-2.008 Verify that input field accepts special characters', function () {
            $(sel.inputFields.name).setValue(data.names.nameSymbols);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual(data.names.nameSymbols);
        });

        it('TC-2.009 Verify that input field accepts 1 symbol ', function () {
            $(sel.inputFields.name).setValue(data.names.name0);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual(data.names.name0);
        });

        it('TC-2.010 Verify that input field limit is 70 symbols', function () {
            $(sel.inputFields.name).setValue(data.names.d70);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual(data.names.d70);
        });

        it('TC-2.011 Verify that input field accepts between 1 - 70 symbols', function () {
            $(sel.inputFields.name).setValue(data.names.d50);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual(data.names.d50);
        });

        it('TC-2.012 Verify that if input value is no longer than 70 symbols', function () {
            $(sel.inputFields.name).setValue(data.names.d71);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual('');
        });

        it('TC-2.013 Verify that spaces before and after name are trimmed', function () {
            $(sel.inputFields.name).setValue(data.names.withSpaces);
            const getName = $(sel.inputFields.name).getValue();
            expect(getName).toEqual(exp.name);
        });
    });
});