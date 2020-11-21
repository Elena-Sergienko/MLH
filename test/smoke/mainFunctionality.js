const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const uploadingImage = require('../../helpers/uploadingImage');


describe('Checking the main functionality', function () {
    before(() => {
        browser.url('');
        browser.maximizeWindow();
    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('Happy path without image', function () {
        it('TC-7.007 Verify that User can read the story after submitting with choice type of story "Comedy"', function () {
            inputValues4andClick(data.names.LadyBug007, data.gender.she, data.ages.n5, data.typeOfStory.comedy);
            const text = $(sel.story.textOfStory).isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC-7.007.1 Check that the first page is displayed after clicking the button Try Again', function () {
            inputValues4andClick(data.names.LadyBug007, data.gender.she, data.ages.n5, data.typeOfStory.comedy);

            $(sel.tryAgain).click();
            const homePage = $(sel.description).isDisplayed();
            expect(homePage).toEqual(true);
        });
    });

    describe('Happy path with image', function () {
        it('TC Verify that User can read the story after submitting with choice type of story "Comedy"', function () {
            inputValues4(data.names.Shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            uploadingImage(data.images.shrekPng);
            $(sel.createButton).click();

            const text = $(sel.story.textOfStory).isDisplayed();
            expect(text).toEqual(true);
        });

        it('TC Verify that image present in the Story', function () {
            inputValues4(data.names.Shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            uploadingImage(data.images.shrekPng);
            $(sel.createButton).click();

            const imageCheck = $(sel.story.image).getAttribute('src');
            const imageInStoryPresent = imageCheck.length > exp.story.srcIfNoImageInStory.length;
            expect(imageInStoryPresent).toEqual(true);
        });
    });
});
