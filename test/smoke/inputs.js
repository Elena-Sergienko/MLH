const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const uploadingImage = require('../../helpers/uploadingImage');
const inputValues4andClick = require('../../helpers/inputValues4andClick');
const inputValues4 = require('../../helpers/inputValues4');


describe('Inputs', function () {

    describe('Input fields are displayed', function () {
        it('TC-2.003 Verify that Name field is present', function () {
            const name = $(sel.inputFields.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-3.003 Verify that radio button he is present', function () {
            const gender = $$(sel.inputFields.gender)[data.gender.he].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-3.004 Verify that radio button she is present', function () {
            const gender = $$(sel.inputFields.gender)[data.gender.she].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-3.005 Verify that radio button it is present', function () {
            const gender = $$(sel.inputFields.gender)[data.gender.it].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-4.003 Verify that Age field is present', function () {
            const label = $(sel.inputFields.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-5.003 Verify that input field Type of Story is present', function () {
            const label = $(sel.inputFields.story).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-6.003 Verify that Image input box is present', function () {
            const label = $(sel.inputFields.image).isDisplayed();
            expect(label).toEqual(true);
        });
    });
    describe('Create button is displayed and correct', function () {
        it('TC-8.001 Verify that submit button is present', function () {
            const label = $(sel.createButton).isDisplayed();
            expect(label).toEqual(true);
        });
        it.skip('TC-8.002 Verify that submit button name is "Create!"', function () {
            const label = $(sel.createButton).getText();
            expect(label).toEqual(exp.createButton);
        });
    });

    describe('Placeholder texts are correct', function () {
        it('TC-2.004 Verify that placeholder text is Hero\'s name', function () {
            const placeHolder = $(sel.inputFields.name).getAttribute('placeholder');
            expect(placeHolder).toEqual(exp.placeholders.name);
        });

        it('TC-4.004 Verify that placeholder text is Hero\'s age', function () {
            const placeHolder = $(sel.inputFields.age).getAttribute('placeholder');
            expect(placeHolder).toEqual(exp.placeholders.age);
        });

        it('TC-5.004 Verify that placeholder text is "Type of the story"', function () {
            const placeHolder = $(sel.placeholderType).getText();
            expect(placeHolder).toEqual(exp.placeholders.type);
        });

        it('TC-6.004 Verify that placeholder text is "drag and drop your image here or browse"', function () {
            const placeHolder = $(sel.placeholderImage).getText();
            expect(placeHolder).toEqual(exp.placeholders.image);
        });
    });

    describe('Radio buttons are Clickable', function () {
        it('TC-3.007 Verify that radio button he is clickable', function () {
            const clickable = $$(sel.radioButtonsArray)[data.gender.he].isClickable();
            expect(clickable).toEqual(true);
        });

        it('TC-3.008 Verify that radio button she is clickable', function () {
            const clickable = $$(sel.radioButtonsArray)[data.gender.she].isClickable();
            expect(clickable).toEqual(true);
        });

        it('TC-3.009 Verify that radio button it is clickable', function () {
            const clickable = $$(sel.radioButtonsArray)[data.gender.it].isClickable();
            expect(clickable).toEqual(true);
        });
    });

    describe('Input fields accept', function () {
        it('TC-2.005 Verify that input field accepts lower case letters', function () {
            $(sel.inputFields.name).setValue(data.names.shrek);
            const getValue = $(sel.inputFields.name).getValue();
            expect(getValue).toEqual(data.names.shrek);
        });

        it('TC-4.011 Verify that input field accepts between 1-digit integer - 12-digit integer', function () {
            $(sel.inputFields.age).setValue(data.ages.n100500);
            const getValue = $(sel.inputFields.age).getValue();
            expect(getValue).toEqual(exp.ages.n100500);
        });

        it('TC-5.005 Verify that dropdown expands', function () {
            $(sel.storyClick).click();
            const genre = $$(sel.storyDropDownOptions).length;
            expect(genre).toEqual(7);
        });

        it('TC-5.012 Verify that dropdown contains option Comedy', function () {
            browser.refresh();
            $(sel.storyClick).click();
            browser.keys(['ArrowUp', 'Enter']);

            const comedy = $(sel.inputFields.story).getText();
            expect(comedy).toEqual(exp.typeOfStory.comedy);
        });

        it('TC-6.005 Verify that upon clicking on browse choosing a file from the computer is enabled', function () {
            uploadingImage(data.images.ladyBugJpeg);
            const imagePreview = $(sel.imagePreview).isDisplayed();
            expect(imagePreview).toEqual(true);
        });
    });

    beforeEach(() => {
        browser.refresh();
    });
    describe('Try Again button', function () {
        it('TC-7.016 Verify that submit button is active (clickable)', function () {
            inputValues4andClick(data.names.LadyBug007, data.gender.she, data.ages.n230, data.typeOfStory.comedy);
            const tryAgain = $(sel.tryAgain).isClickable();
            expect(tryAgain).toEqual(true);
        });

        it('TC-7.017 Verify that submit button refreshes the page', function () {
            inputValues4andClick(data.names.shrek, data.gender.he, data.ages.n567, data.typeOfStory.tragedy);
            $(sel.tryAgain).click();
            const homePage = $(sel.description).isDisplayed();
            expect(homePage).toEqual(true);
        });
    });

    describe('Create button', function () {
        it('TC-8.010 Verify that after clicking submit button, the story is present on the same page', function () {
            inputValues4(data.names.LadyBug007, data.gender.she, data.ages.n230, data.typeOfStory.overcomingTheMonster);
            browser.pause(3000)
            uploadingImage(data.images.shrekJpeg);

            $(sel.createButton).click();
            expect($(sel.story.textOfStory)).toBeDisplayed();
        });
    });
});
