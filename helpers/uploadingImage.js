const sel = require('../data/selectors.json');
const path = require('path');

function uploadingImage (imgPath){

    const inputDiv = $(sel.imageUpload);
    const filePath = path.join(__dirname, imgPath);
    const remoteFilePath = browser.uploadFile(filePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = 'block';
    });

    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
    $(sel.imagePreview).waitForDisplayed();
};

module.exports = uploadingImage;