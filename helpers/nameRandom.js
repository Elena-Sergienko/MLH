function nameRandom(length) {

    let chars = 'ABCDEFGHIJKLMHOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for(let i = 0; i < length; i++){
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
return str;
}

module.exports = nameRandom;