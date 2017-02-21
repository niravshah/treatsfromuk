var Mailchimp = require('mailchimp-api-v3');


module.exports = function (app,config) {
    var mailchimp = new Mailchimp(config.mc_api_key);
    app.post('/lists/:id/members', function (req, res) {

        console.log(config.mc_api_key);
        console.log(req.originalUrl);
        console.log(req.body);

        /*mailchimp.get('/lists',function(err,result){
            console.log(err);
            console.log(result);
            res.json({err:err,result:result})
        });*/

        mailchimp.post(req.originalUrl, {email_address:req.body.user_email,status:'subscribed'}, function (err, result) {
            console.log(err);
            console.log(result);
          res.json({err:err,result:result})
        });
    });
};