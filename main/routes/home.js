module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/order', function (req, res) {
        res.render('order');
    });
};