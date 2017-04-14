var Mailgun = require('mailgun-js');
var api_key = 'key-f04b0e48c5a6fc439036aa284b5e15e6';
var domain = 'mailgun.treatsfromuk.com';
var from_who = 'nirav@treatsfromuk.com';

module.exports = function (app) {

    app.post('/mailgun/new', function (req, res) {

        console.log(req.body);
        var mailgun = new Mailgun({apiKey: api_key, domain: domain});

        var data = {
            from: from_who,
            to: "nirav.shah83@gmail.com",
            subject: 'New User Query',
            text: "Test Email"
        };

        //Invokes the method to send emails given the above data with the helper library
        mailgun.messages().send(data, function (err, body) {
            console.log('Error: ',err);
            console.log(body);
            res.json("{msg:ok}");
        });

    });


};