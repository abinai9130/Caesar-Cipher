// Import the Caesar Cipher package
const CaesarCipher = require('@cryptoolsorg/caesarcipher');

// Message to decrypt
const encryptedMessage = "0 1 8 ";

// Shift (key)
const shift = 4;

// Decrypt the message
const decryptedMessage = CaesarCipher.decrypt(encryptedMessage, shift);

console.log("Decrypted Message:", decryptedMessage);
