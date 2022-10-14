const otp = require('./OTP Generator/otpgenerate')
const password = require('./PasswordGenerator/password')


console.log('====================================');
console.log("Generated OTP :" + otp());
console.log('====================================');

console.log('====================================');
console.log("Generated Password = " + password());
console.log('====================================');