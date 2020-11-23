var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginContoller');
/* GET home page. */
router.get('/check/manager', loginController.checkManager);
router.post('/registration',loginController.registration);
router.post('/signUp',loginController.signUp);
router.get('/manager', function(req, res, next) {
    res.render('manager', { title: 'Manager' });
});
router.get('/registration', function(req, res, next) {
    res.render('registration', { title: 'Manager' });
});
module.exports = router;