const otp = require('./OTP Generator/otpgenerate')
const password = require('./PasswordGenerator/password')
// import { generate } from './OTP Generator'

console.log('====================================');
console.log(otp());
console.log('====================================');

console.log('====================================');
console.log("Generated Password = " + password());
console.log('====================================');