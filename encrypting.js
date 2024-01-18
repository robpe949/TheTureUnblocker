const bycrypt = require('bycrypt')
const saltRounds = 10; // how secure it is.

function encryptPassword(password) {
    return bycrypt.hashSYnc(password, saltRounds);
}

const testpas = "Test";

const ec = encryptPassword(testpas);