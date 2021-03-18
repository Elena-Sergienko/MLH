const sel = require('../data/selectors.json');
const path = require('path');

function uploadingImage(imgPath) {

    const inputDiv = $(sel.imageUpload);
    const filePath = path.join(__dirname, imgPath);
    // const remoteFilePath = browser.uploadFile(filePath); // ранее необходимо было выполнить с этой строчкой и эта переменная затем передавалась в inputDiv.setValue(remoteFilePath);
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = 'block';
    });

    inputDiv.waitForDisplayed();
    inputDiv.setValue(filePath);
    $(sel.imagePreview).waitForDisplayed();
}

module.exports = uploadingImage;

// https://webdriver.io/blog/2019/06/25/file-upload/
