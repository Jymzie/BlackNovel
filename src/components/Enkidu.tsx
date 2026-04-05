import CryptoJS from "crypto-js";

// Vite uses import.meta.env instead of process.env
// Note: Variable must start with VITE_ in your .env file
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

/**
 * Decrypts a CryptoJS AES string back into a JS Object
 * @param {string} ciphertext - The encrypted string
 * @returns {object|array} - The original data
 */
const enki = (ciphertext) => {
    if (!ciphertext) return null;

    // 1. Decrypt to raw bytes
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    
    // 2. Convert bytes to a UTF-8 string
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    
    // 3. Parse the string back into a JSON object/array
    try {
        return JSON.parse(decryptedText);
    } catch (error) {
        console.error("Decryption failed: Invalid key or corrupted data");
        return null;
    }
};

export default enki;