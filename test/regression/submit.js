const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const code = require('../../data/codes.json')
const inputValues4 = require('../../helpers/inputValues4');
const uploadingImage = require('../../helpers/uploadingImage');


describe('Regression. Submit Button', function () {

    beforeEach(() => {
        browser.refresh();
    });

    describe('Create Button', function () {

        describe('Create Button disabled/enabled', function () {

            it('TC-8.003 Verify that submit button is disabled if none of the options are selected', function () {
                const createButton = $(sel.createButton).isEnabled();
                expect(createButton).not.toEqual(true);
            });

            it('TC-8.004 Verify that submit button is disabled if only 1 option is selected', function () {
                $(sel.inputFields.name).setValue(data.names.shrek);
                const createButton = $(sel.createButton).isEnabled();
                expect(createButton).not.toEqual(true);
            });

            it('TC-8.005 Verify that submit button is disabled if only 2 options are selected', function () {
                $(sel.inputFields.name).setValue(data.names.shrek);
                $(sel.inputFields.age).setValue(data.ages.n230);
                const createButton = $(sel.createButton).isEnabled();
                expect(createButton).not.toEqual(true);
            });

            it('TC-8.006 Verify that submit button is disabled if only 3 options are selected', function () {
                $(sel.inputFields.name).setValue(data.names.shrek);
                $$(sel.inputFields.gender)[data.gender.he].click();
                $(sel.inputFields.age).setValue(data.ages.n230);
                const createButton = $(sel.createButton).isEnabled();
                expect(createButton).not.toEqual(true);
            });

            it('TC-8.007 Verify that submit button is enabled if 4 options are selected', function () {
                inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy)
                const createButton = $(sel.createButton).isEnabled();
                expect(createButton).toEqual(true);
            });

            it('TC-8.008 Verify that submit button is enabled if 5 options are selected', function () {
                inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);
                uploadingImage(data.images.shrekJpeg);
                const createButton = $(sel.createButton).isEnabled();
                expect(createButton).toEqual(true);
            });
        });

        describe('Options can be changed before submitting', function () {

            it('TC-8.009.1 Verify that Name can be changed before submitting', function () {
                inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);

                $(sel.inputFields.name).doubleClick();
                browser.keys("Delete");
                $(sel.inputFields.name).setValue(data.names.dragon);

                const nameNew = $(sel.inputFields.name).getValue();
                expect(nameNew).toEqual(exp.names.dragon);
            });

            it.skip('TC-8.009.2 Verify that 1 letter of Name can be changed before submitting', function () {
                inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);

                $(sel.inputFields.name).click();
                browser.keys([code.home + code.left, code.delete, data.names.letters[18].toUpperCase()]);

                const nameNew = $(sel.inputFields.name).getValue();
                expect(nameNew).toEqual(exp.names.Shrek);
            });

            it('TC-8.009.3 Verify that Age can be changed before submitting', function () {
                inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);

                $(sel.inputFields.age).doubleClick();
                browser.keys([code.control + data.names.letters[0], code.delete]);
                $(sel.inputFields.age).setValue(data.ages.n25);

                const nameAge = $(sel.inputFields.age).getValue();
                expect(nameAge).toEqual(exp.ages.n25);
            });

            it.skip('TC-8.009.4 Verify that 1 digit of Age can be changed before submitting', function () {
                inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);

                $(sel.inputFields.age).click();
                browser.keys([code.delete, code.backspace, data.ages.n5]);

                const newAge = $(sel.inputFields.age).getValue();
                expect(newAge).toEqual(exp.ages.n235);
            });

            it('TC-8.009.5 Verify that Gender can be changed before submitting', function () {
                inputValues4(data.names.dragon, data.gender.he, data.ages.n230, data.typeOfStory.comedy);

                $$(sel.inputFields.gender)[data.gender.it].click();
                $(sel.createButton).click();
                const story = $(sel.story.textOfStory);
                expect(story).toHaveTextContaining(exp.gender.it);
            });

            it('TC-8.009.6 Verify that Type of Story can be changed before submitting', function () {
                inputValues4(data.names.dragon, data.gender.he, data.ages.n230, data.typeOfStory.comedy);

                $(sel.inputFields.story).click();
                $$(sel.typeOfStory)[data.typeOfStory.tragedy].waitForDisplayed();
                $$(sel.typeOfStory)[data.typeOfStory.tragedy].click();

                const typeOfStory = $(sel.inputFields.story).getText();
                expect(typeOfStory).toEqual(exp.typeOfStory.tragedy);
            });
        });
    });
});