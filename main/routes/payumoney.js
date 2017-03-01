var crypto = require('crypto'),
    text = 'hello bob',
    key = 'W2Yp27WURs';



module.exports = function (app) {
    app.get('/hash', function (req, res) {
        var hash = crypto.createHash('sha512', key);
        hash.update(text);
        var value = hash.digest('hex');
        console.log(value);
        res.setHeader("Authorization","AKJyS9Oh");
        res.redirect('https://secure.payu.in/_payment?amount=100');
    })
}