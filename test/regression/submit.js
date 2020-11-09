const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const inputValues4 = require('../../helpers/inputValues4');
const uploadingImage = require('../../helpers/uploadingImage');

describe('Regression. Submit Button', function () {
    before(() => {
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });
    beforeEach(() => {
        browser.refresh();
    });

    describe('Create Button', function () {
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

        it('TC-8.009 Verify that options can be changed before submitting', function () {
            inputValues4(data.names.shrek, data.gender.he, data.ages.n230, data.typeOfStory.comedy);

            $(sel.inputFields.name).clearValue();
            $(sel.inputFields.age).clearValue();
            // $(sel.inputFields.age).refresh();

            inputValues4(data.names.FIONA, data.gender.she, data.ages.n25, data.typeOfStory.tragedy);
            browser.pause(6000);

            const nameNew = $(sel.inputFields.name).getValue();
            expect(nameNew).toEqual(exp.names.FIONA);

            const ageNew = $(sel.inputFields.age).getValue();
            expect(ageNew).toEqual(exp.ages.n25);

        });
    });
});