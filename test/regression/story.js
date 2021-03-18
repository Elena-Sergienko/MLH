const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const uploadingImage = require('../../helpers/uploadingImage');
const inputValues4andClick = require('../../helpers/inputValues4andClick');


describe('Regression. Test suite for Element Story', function () {

    beforeEach(() => {
        browser.refresh();
    });

    describe('Type of Story', function () {
        it('TC-7.006 Verify that User can read the story after submitting with choice type of story "Comedy"', function () {
            inputValues4andClick(data.names.Shrek, data.gender.he, data.ages.n567, data.typeOfStory.comedy);
            const headerComedy = $(sel.story.h4);
            expect(headerComedy).toHaveTextContaining(exp.story.header);
        });
    });

    describe('Gender in Story', function () {
        it('TC-7.008 The gender should be used for possessive pronouns as well she -- her', function () {
            inputValues4andClick(data.names.LadyBug007, data.gender.she, data.ages.n567, data.typeOfStory.comedy);
            const headerComedy = $(sel.story.textOfStory);
            expect(headerComedy).toHaveTextContaining(exp.story.genderInStory.she);
        });

        it('TC-7.009 The gender should be used for possessive pronouns as well he -- his', function () {
            inputValues4andClick(data.names.LadyBug007, data.gender.he, data.ages.n567, data.typeOfStory.comedy);
            const headerComedy = $(sel.story.textOfStory);
            expect(headerComedy).toHaveTextContaining(exp.story.genderInStory.he);
        });

        it('TC-7.010 The gender should be used for possessive pronouns as well it -- its', function () {
            inputValues4andClick(data.names.LadyBug007, data.gender.it, data.ages.n567, data.typeOfStory.overcomingTheMonster);
            const headerComedy = $(sel.story.textOfStory);
            expect(headerComedy).toHaveTextContaining(exp.story.genderInStory.it);
        });
    });

    describe('Age in Story', function () {
        it('TC-7.011 Verify that age in the story in words', function () {
            inputValues4andClick(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            const headerComedy = $(sel.story.textOfStory);
            expect(headerComedy).toHaveTextContaining(exp.story.age);
        });
    });

    describe('Name in Story', function () {
        it('TC-7.012 Verify that "name of the Hero" in the story corresponds to entered name', function () {
            inputValues4andClick(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            const headerComedy = $(sel.story.textOfStory);
            expect(headerComedy).toHaveTextContaining(exp.names.shrek);
        });

        it('TC-7.015 Verify that if Hero\'s name is entered with lower case it displays with capital letter in the story', function () {
            inputValues4andClick(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            const headerComedy = $(sel.story.textOfStory);
            expect(headerComedy).toHaveTextContaining(exp.names.Shrek);
        });
    });

    describe('Image in Story', function () {
        it('TC-7.018 Verify that image is present', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            uploadingImage(data.images.shrekPng);
            $(sel.createButton).click();
            const imageCheck = $(sel.story.image).getAttribute('src');
            const imageInStoryPresent = imageCheck.length > exp.story.srcIfNoImageInStory.length;
            expect(imageInStoryPresent).toEqual(true);
        });

        it('TC-7.019 Verify that image is not present', function () {
            inputValues4andClick(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
            const imageCheck = $(sel.story.image).getAttribute('src');
            const imageInStoryAbsent = imageCheck === exp.story.srcIfNoImageInStory;
            expect(imageInStoryAbsent).toEqual(true);
        });
    });
});