var authController = require('../controller/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);

    app.get('/', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/my-profile',

        failureRedirect: '/signup'
    }

    ));

    app.get('/my-profile', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/my-profile',

        failureRedirect: '/'
    }

    ));

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/');

    }

}