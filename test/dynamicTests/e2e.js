const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const setData = require('../../data/setsTestData.json');
const setDataNegative = require('../../data/setsTestDataNegative.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const uploadingImage = require('../../helpers/uploadingImage');


describe('Verify the main functionality', function () {

    describe('Positive', function () {

        setData.forEach(function (setData) {
            it(`Verify that User can create, read the story about hero ${setData.name} and go back to the main page `, function () {
                const story = $(sel.story.textOfStory);
                inputValues4andClick(setData.name, setData.gender, setData.age, setData.story);
                expect(story).toBeDisplayed();
                expect(story).toHaveTextContaining(setData.name);
                expect(story).toHaveTextContaining(setData.age);

                $(sel.tryAgain).click();
                const verifyUrl = browser.getUrl();
                expect(verifyUrl).toEqual(exp.url.homePage2);
            });
        });
    });

    describe('Negative', function () {
        beforeEach(() => {
            browser.url('');
        })
        setDataNegative.map( el => {
            it(`Verify that the Create button is not clickable if ${el.testCase}`, function () {
                inputValues4(el.name, el.gender, el.age, el.story);
                expect($(sel.createButton)).not.toBeClickable();
            });
        });
    });
});
