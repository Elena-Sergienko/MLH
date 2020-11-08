const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');

describe('Regression. Type of Story', function () {
    beforeEach(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    describe('Element Type of Story', function () {
        it('TC-5.006 Verify that dropdown contains option "Overcoming the Monster"', function () {
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.overcomingTheMonster].click();
            const overcoming = $(sel.inputFields.story).getText();
            expect(overcoming).toEqual(exp.typeOfStory.overcomingMonster);
        });

        it('TC-5.007 Verify that dropdown contains option "Rebirth"', function () {
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.rebirth].click();
            const rebirth = $(sel.inputFields.story).getText();
            expect(rebirth).toEqual(exp.typeOfStory.rebirth);
        });

        it('TC-5.008 Verify that dropdown contains option "Quest"', function () {
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.quest].click();
            const quest = $(sel.inputFields.story).getText();
            expect(quest).toEqual(exp.typeOfStory.quest);
        });

        it('TC-5.009 Verify that dropdown contains option "Journey and Return"', function () {
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.journeyReturn].click();
            const journey = $(sel.inputFields.story).getText();
            expect(journey).toEqual(exp.typeOfStory.journey);
        });

        it('TC-5.010 Verify that dropdown contains option "Rags and Riches"', function () {
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.ragsRiches].click();
            const ragsRiches = $(sel.inputFields.story).getText();
            expect(ragsRiches).toEqual(exp.typeOfStory.ragsRiches);
        });

        it('TC-5.011 Verify that dropdown contains option "Tragedy"', function () {
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.tragedy].click();
            const tragedy = $(sel.inputFields.story).getText();
            expect(tragedy).toEqual(exp.typeOfStory.tragedy);
        });

        it('TC-5.013 Verify that multiple choices are not allowed', function () {
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.tragedy].click();
            $(sel.storyClick).click();
            $$(sel.storyTypeArray)[data.typeOfStory.comedy].click();
            const choice = $(sel.inputFields.story).getText();
            expect(choice).toEqual(exp.typeOfStory.comedy);
        });
    });
});