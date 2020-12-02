if (typeof define !== 'function') {var define = require('amdefine')(module);}
define(function (require) {
    var _dataCtrl = null;
    var _bodyParser = null;
    var _uuid4 = null;
    var cookieParser = null;


    var login = {
        ignite : function (express, app) {
            _dataCtrl = require('../model/datactrl');
            _dataCtrl.initPool();
            _bodyParser = require('body-parser');
            _uuid4 = require('uuid4');
            cookieParser = require('cookie-parser');
            app.use(_bodyParser.json());
            app.use(_bodyParser.urlencoded({extended:true}));
        },
        signUp : function (req, res) {                //회원가입
            const userId = req.body.userId;
            const password = req.body.password;
            console.log(userId);
            console.log(password);

            var _password = crypto.createHash('sha256').update(password).digest('base64');

            _dataCtrl.dbQueryPool("INSERT INTO manager_info values (?,?)", [userId,_password], function (rslt) {
                res.json(rslt);
                return true;
            }, res);
        },

        signIn : function (req, res) {                      //로그인
            var ma_session = null;
            const userId = req.body.userId;
            const password = req.body.password;
            console.log(userId);
            console.log(password);

            var _password = crypto.createHash('sha256').update(password).digest('base64');

            _dataCtrl.dbQueryPool("SELECT * FROM manager_info where user_id = ?", [userId], function (rslt) {
                if(rslt.length<1){
                    res.json({});
                }
                else if(rslt[0].password == _password){
                    ma_session = _uuid4();
                    _dataCtrl.dbQueryPool("UPDATE manager_info set session_id = ?  where user_id = ?", [ma_session,userId], function (rslt) {
                        res.cookie('ma_session', ma_session);
                        res.json(rslt);
                        return true;
                    },res);
                }
                else{
                    res.json({});
                }
                return true;
            }, res);
            return true;
        },


        checkManager : function (req, res) {                //매니저 여부 확인
            var ma_session = req.cookies.ma_session;

            _dataCtrl.dbQueryPool("SELECT * FROM manager_info where inc_session = ?", [ma_session], function (rslt) {
                if(rslt[0].ma_session == ma_session){
                    res.json(rslt);
                }
                else{
                    res.json({});
                }
                return true;
            }, res);
            return true;
        }

    }
    return login;
});