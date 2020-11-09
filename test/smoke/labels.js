const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const data = require('../../data/testData.json');
const inputValues4andClick = require('../../helpers/inputValues4andClick');


describe('My Little Hero', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('Title is correct', function () {
        it('TC-1.001 Verify that title is "MLH trial"', function () {
            const title = browser.getTitle();
            expect(title).toEqual(exp.title);
        });
    });

    describe('Header is displayed and correct', function () {
        it('TC-1.002 Verify that header is present', function () {
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-1.003 Verify that header is "My Little Hero"', function () {
            const header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });
    });

    describe('Description is displayed and correct', function () {
        it('TC-1.004 Verify that text is preset', function () {
            const description = $(sel.description).isDisplayed();
            expect(description).toEqual(true);
        });

        it('TC-1.005 Verify that text is "Let\'s create your own HERO! It\'s super easy with our application!"', function () {
            const description = $(sel.description).getText();
            expect(description).toEqual(exp.description);
        });
    });

    describe('Labels displayed', function () {

        it('TC-2.001 Verify that Label 1 is present ', function () {
            const label = $$(sel.labelsNameGenAgeType)[data.labels.name].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-3.001 Verify that Label 2 is present ', function () {
            const label = $$(sel.labelsNameGenAgeType)[data.labels.gender].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-4.001 Verify that Label 3 is present ', function () {
            const label = $$(sel.labelsNameGenAgeType)[data.labels.age].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-5.001 Verify that Label 4 is present ', function () {
            const label = $$(sel.labelsNameGenAgeType)[data.labels.type].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-6.001 Verify that Label 5 is present', function () {
            const label = $(sel.labelImage).isDisplayed();
            expect(label).toEqual(true);
        });
    });

    describe('Labels are correct', function () {

        it('TC-2.002 Verify that text for Label 1 is <1. What is your Hero\'s name?>', function () {
            const text = $$(sel.labelsNameGenAgeType)[data.labels.name].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-3.002 Verify that text for Label 2 is <2. Please choose a gender.>', function () {
            const text = $$(sel.labelsNameGenAgeType)[data.labels.gender].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-4.002 Verify that text for Label 3 is <3. How old is your Hero?>', function () {
            const text = $$(sel.labelsNameGenAgeType)[data.labels.age].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-5.002 Verify that text for Label 4 is <4. What type of story would you like to read?>', function () {
            const text = $$(sel.labelsNameGenAgeType)[data.labels.type].getText();
            expect(text).toEqual(exp.labelStory);
        });

        it('TC-6.002 Verify that text for Label 5 is <5. Upload an image (optional).>', function () {
            const text = $(sel.labelImage).getText();
            expect(text).toEqual(exp.labelImage);
        });
    });

    describe('Texts of radio buttons (hi she it) are correct', function () {
        it('TC-3.010 Verify that text for radio button he is correct', function () {
            const text = $$(sel.textHeSheIt)[data.gender.he].getText();
            expect(text).toEqual(exp.gender.he);
        });

        it('TC-3.011 Verify that text for radio button she is correct', function () {
            const text = $$(sel.textHeSheIt)[data.gender.she].getText();
            expect(text).toEqual(exp.gender.she);
        });

        it('TC-3.012 Verify that text for radio button it is correct', function () {
            const text = $$(sel.textHeSheIt)[data.gender.it].getText();
            expect(text).toEqual(exp.gender.it);
        });
    });
    describe('Try again button', function () {
        it('TC-7.013 Verify that submit button is present', function () {
            inputValues4andClick(data.names.Shrek, data.gender.it, data.ages.n230, data.typeOfStory.ragsRiches);
            const button = $(sel.tryAgainButton).isDisplayed();
            expect(button).toEqual(true);
        });

        it('TC-7.014 Verify that submit button name is "Try again!"', function () {
            inputValues4andClick(data.names.Shrek, data.gender.it, data.ages.n230, data.typeOfStory.ragsRiches);
            const button = $(sel.tryAgainButton).getText();
            expect(button).toEqual(exp.tryAgainButton);
        });
    });
});
