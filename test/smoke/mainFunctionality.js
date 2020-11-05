const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');


describe('Checking the main functionality', function () {
    beforeEach(()=> {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function() {
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });

    describe('Other paths', function () {

        it('TC-022 ', function() {
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType.OvercomingTheMonster);
            const tryAgain = $(sel.tryAgain).isDisplayed();
            expect(tryAgain).toEqual(true);
        });
    });
});
