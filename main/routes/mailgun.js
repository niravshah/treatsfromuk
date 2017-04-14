var Mailgun = require('mailgun-js');

module.exports = function (app,config) {

    app.post('/mailgun/new', function (req, res) {

        var api_key = config.mg_api_key;

        var domain = 'mailgun.treatsfromuk.com';
        var from_who = 'nirav@treatsfromuk.com';

        var mailgun = new Mailgun({apiKey: api_key, domain: domain});

        var data = {
            from: from_who,
            to: "nirav.shah83@gmail.com",
            subject: 'New User Query',
            html: "<p>Name: " + req.body.user_name + "</p><p> Email: " + req.body.user_email + "</p><p> Message: " + req.body.user_message + "</p>"
        };

        mailgun.messages().send(data, function (err, body) {

            if(err){
                res.json("{type:error, message:err}");
            }else{
                res.json("{type:success, message:body}");
            }

        });

    });


};