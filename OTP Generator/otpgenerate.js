const generate = () => {
    let otp = ''
    let numbers = '0123456789'
    for (let i = 0; i < 6; i++) {
        otp += numbers[Math.floor(Math.random() * 10)];
    }
    return otp;

}


module.exports = generate;

