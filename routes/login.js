var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginContoller');
/* GET home page. */
router.get('/check/manager', loginController.checkManager);
router.get('/manager', function(req, res, next) {
    res.render('manager', { title: 'Manager' });
});
module.exports = router;