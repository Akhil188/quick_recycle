const crypto = require('crypto');

// Generate a secure random key
const key = crypto.randomBytes(64).toString('hex');
console.log('Your JWT Secret Key:', key);
