const CryptoJS = require("crypto-js");
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

/**
 * Decrypts a CryptoJS AES string back into a JS Object
 * @param {string} ciphertext - The encrypted string
 * @returns {object|array} - The original data
 */
const enki = (ciphertext) => {
    // 1. Decrypt to raw bytes
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    
    // 2. Convert bytes to a UTF-8 string
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    
    // 3. Parse the string back into a JSON object/array
    return JSON.parse(decryptedText);
};


export default enki;