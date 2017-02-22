var Zendesk = require('zendesk-node-api');

module.exports = function (app, config) {

    var zendesk = new Zendesk({
        url: config.zendesk_url,
        email: config.zendesk_email,
        token: config.zendesk_api_key
    });

    app.post('/zendesk/tickets/new', function (req, res) {

        zendesk.tickets
            .create({subject: 'A new ticket', comment: {body: 'A ticket created with zendesk-node-api'}})
            .then(function (result) {
                console.log(result);
                res.send(result);
            });
    });
};