var Mailchimp = require('mailchimp-api-v3');


module.exports = function (app,config) {
    var mailchimp = new Mailchimp(config.mc_api_key);
    app.post('/lists/:id/members', function (req, res) {

        mailchimp.post(req.originalUrl, {email_address:req.body.user_email,status:'subscribed'}, function (err, result) {
            console.log(err);
            console.log(result);
          res.json({err:err,result:result})
        });
    });
};