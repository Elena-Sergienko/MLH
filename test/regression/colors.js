const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const color = require('../../data/colors.json');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const inputValues4 = require('../../helpers/inputValues4');

describe('Verify colors', function () {

    beforeEach(() => {
        browser.refresh();
    });

        it('TC Verify that color Create Button is white', function () {
            inputValues4(data.names.FIONA, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            let colorCreateBtn = $(sel.createButton).getCSSProperty('background-color').parsed.hex;
            expect(colorCreateBtn).toEqual(color.white);
        });

        it('TC Verify that color TryAgain Button is blue', function () {
            inputValues4andClick(data.names.FIONA, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            let colorTryAgainBtn = $(sel.tryAgainButton).getCSSProperty('background-color').parsed.hex;
            expect(colorTryAgainBtn).toEqual(color.blue);
        });
    });
