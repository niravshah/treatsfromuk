var crypto = require('crypto'),
    text = 'hello bob',
    key = 'mysecret key'



module.exports = function (app) {
    app.get('/hash', function (req, res) {
        var hash = crypto.createHmac('sha512', key);
        hash.update(text);
        var value = hash.digest('hex');
        console.log(value);

        res.send({hash:value});
    })
}