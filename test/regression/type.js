const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const code = require('../../data/codes.json');
const selectTypeFromKeyBoard = require('../../helpers/selectTypeFromKeyBoard');


describe('Regression. Type of Story', function () {

    beforeEach(() => {
        browser.refresh();
    });

    describe('Test suite for Element Type of Story', function () {

        describe('Selecting the story type by clicking', function () {

            it('TC-5.006 Verify that dropdown contains option "Overcoming the Monster"', function () {
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.overcomingTheMonster].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.overcomingTheMonster].click();
                const overcoming = $(sel.inputFields.story).getText();
                expect(overcoming).toEqual(exp.typeOfStory.overcomingMonster);
            });

            it('TC-5.007 Verify that dropdown contains option "Rebirth"', function () {
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.rebirth].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.rebirth].click();
                const rebirth = $(sel.inputFields.story).getText();
                expect(rebirth).toEqual(exp.typeOfStory.rebirth);
            });

            it('TC-5.008 Verify that dropdown contains option "Quest"', function () {
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.quest].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.quest].click();
                const quest = $(sel.inputFields.story).getText();
                expect(quest).toEqual(exp.typeOfStory.quest);
            });

            it('TC-5.009 Verify that dropdown contains option "Journey and Return"', function () {
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.journeyReturn].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.journeyReturn].click();
                const journey = $(sel.inputFields.story).getText();
                expect(journey).toEqual(exp.typeOfStory.journey);
            });

            it('TC-5.010 Verify that dropdown contains option "Rags and Riches"', function () {
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.ragsRiches].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.ragsRiches].click();
                const ragsRiches = $(sel.inputFields.story).getText();
                expect(ragsRiches).toEqual(exp.typeOfStory.ragsRiches);
            });

            it('TC-5.011 Verify that dropdown contains option "Tragedy"', function () {
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.tragedy].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.tragedy].click();
                const tragedy = $(sel.inputFields.story).getText();
                expect(tragedy).toEqual(exp.typeOfStory.tragedy);
            });

            it('TC-5.013 Verify that multiple choices are not allowed', function () {
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.tragedy].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.tragedy].click();
                $(sel.storyClick).click();
                $$(sel.storyTypeArray)[data.typeOfStory.comedy].waitForDisplayed();
                $$(sel.storyTypeArray)[data.typeOfStory.comedy].click();
                const choice = $(sel.inputFields.story).getText();
                expect(choice).toEqual(exp.typeOfStory.comedy);
            });
        });

        describe('Filling in the input field by pressing Enter', function () {
            beforeEach(() => {
                browser.refresh();
            });
            it('TC-5.006.1 Verify that dropdown contains option "Overcoming the Monster"', function () {
                $(sel.storyClick).click();
                browser.keys("Enter");

                const overcoming = $(sel.inputFields.story).getText();
                expect(overcoming).toEqual(exp.typeOfStory.overcomingMonster);
            });

            it('TC-5.007.1 Verify that dropdown contains option "Rebirth"', function () {
                browser.keys(selectTypeFromKeyBoard(data.typeOfStory.rebirth));
                const checkChoice = $(sel.inputFields.story).getText();
                expect(checkChoice).toEqual(exp.typeOfStory.rebirth);
            });

            it('TC-5.008.1 Verify that dropdown contains option "Quest"', function () {
                browser.keys(selectTypeFromKeyBoard(data.typeOfStory.quest));
                const checkChoice = $(sel.inputFields.story).getText();
                expect(checkChoice).toEqual(exp.typeOfStory.quest);
            });

            it('TC-5.009.1 Verify that dropdown contains option "Journey and Return"', function () {
                browser.keys(selectTypeFromKeyBoard(data.typeOfStory.journeyReturn));
                const checkChoice = $(sel.inputFields.story).getText();
                expect(checkChoice).toEqual(exp.typeOfStory.journey);
            });

            it('TC-5.010.1 Verify that dropdown contains option "Rags and Riches"', function () {
                browser.keys(selectTypeFromKeyBoard(data.typeOfStory.ragsRiches));
                const checkChoice = $(sel.inputFields.story).getText();
                expect(checkChoice).toEqual(exp.typeOfStory.ragsRiches);
            });

            it.skip('TC-5.011.1 Verify that dropdown contains option "Tragedy"', function () {
                $(sel.storyClick).click();
                browser.keys([code.down.repeat(5), code.enter]);
                const checkChoice = $(sel.inputFields.story).getText();
                expect(checkChoice).toEqual(exp.typeOfStory.tragedy);
            });

            it.skip('TC-5.012.1 Verify that dropdown contains option "Comedy"', function () {
                $(sel.storyClick).click();
                browser.keys([code.down.repeat(6), code.enter]);
                const checkChoice = $(sel.inputFields.story).getText();
                expect(checkChoice).toEqual(exp.typeOfStory.comedy);
            });
        });
    });
});