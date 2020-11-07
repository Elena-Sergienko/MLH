const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');


describe('Checking the main functionality', function () {
    beforeEach(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    describe('Happy path', function () {

        it('TC-7.007 Verify that User can read the story after submitting with choice type of story "Comedy"', function () {
            inputValues4(data.names.LadyBug007, data.gender.she, data.ages["567"], data.storyType.Comedy);
            $(sel.createButton).click();
            browser.pause(5000)
            const tryAgain = $(sel.tryAgain).isDisplayed();
            expect(tryAgain).toEqual(true);
        });
    });

    xdescribe('Other paths', function () {

        it('TC xxx ', function () {
            inputValues4andClick(data.names, data.gender.he, data.ages, data.storyType.OvercomingTheMonster);
            const tryAgain = $(sel.tryAgain).isDisplayed();
            expect(tryAgain).toEqual(true);
        });
    });
});
