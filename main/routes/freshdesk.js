var _fd = require('freshdesk-api');

module.exports = function (app) {

    var Freshdesk = new _fd('http://treatsfromuk.freshdesk.com', '12tx6evi2eFvQSFIuQ2');

    app.post('/freshdesk/tickets/new', function (req, res) {

        console.log(req.body);

        var ticket = {
            'helpdesk_ticket': {
                'description': "Hello, I'm an ephemeral ticket created from the API. I will be deleted as soon as my creator wishes so...",
                'subject': "Efemeros",
                'email': 'efemeros@mailinator.com',
                'priority': '1',
                'status': '2'
            }
        };

        Freshdesk.createTicket(ticket,function (result) {
            console.log(result);
            res.send(result);
        });
    });
};