// Import the Caesar Cipher package
const CaesarCipher = require('@cryptoolsorg/caesarcipher');

// Message to encrypt
const message = "abinainatraj";

// Shift (key)
const shift = 4;

// Encrypt the message
const encryptedMessage = CaesarCipher.encrypt(message, shift);

console.log("Encrypted Message:", encryptedMessage);
