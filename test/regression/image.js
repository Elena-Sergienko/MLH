const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const uploadingImage = require('../../helpers/uploadingImage');

describe('Regression. Image', function () {

    beforeEach(() => {
        browser.refresh();
    });

    describe('Test suite for Element Image', function () {
        it('TC-6.007 Verify that if file is uploaded then image preview is displayed', function () {
            inputValues4(data.names.LadyBug007, data.gender.she, data.ages.n123, data.typeOfStory.comedy);
            uploadingImage(data.images.ladyBugJpeg);
            const imagePreview = $(sel.imagePreview).isDisplayed();
            expect(imagePreview).toEqual(true);
        });

        it('TC-6.009 Verify that user can upload jpeg ', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            uploadingImage(data.images.shrekJpeg);
            const imagePreview = $(sel.imagePreview).isDisplayed();
            expect(imagePreview).toEqual(true);
        });

        it('TC-6.010 Verify that user can upload png', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            uploadingImage(data.images.shrekPng);
            const imagePreview = $(sel.imagePreview).isDisplayed();
            expect(imagePreview).toEqual(true);
        });
    });
});