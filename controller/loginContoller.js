const fetch = require("node-fetch");
const AccountId = require("../common/AccountId");
const Manager = require("../model/Manager");
const crypto = require('crypto');

exports.registration = async (req, res) => {
    const userId = req.body.userId;
    const password = req.body.password;
    console.log(userId);
    console.log(password);

    try {
        let checkRegistration = await Manager.registrationManager(userId, password);
        if (checkRegistration) {
            res.status(200).json({
                code: 200
            });
        } else {
            res.status(203).json({
                errors: "not registration"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(205).json({
            errors: "error"
        });
    }
}
exports.signUp = async (req, res) => {
    const sessionId = req.headers.session;
    const password = req.body.password;

    console.log("password : " +password);
    try {
        let accountId = await AccountId.getAccountId(sessionId);
        if (accountId == 0) {
            console.log('session_error');
            res.status(204).json({
                errors: "session Error"
            });
            return;
        }
        let userId = await Manager.findUserId(accountId);
        console.log("userId : " +userId);
        let isLogin = await Manager.login(userId,password);
        console.log("isLogin : " +isLogin);
        if (isLogin) {
            let isUpdateSession = await Manager.updateSession(userId,sessionId);
            console.log(isUpdateSession);
            res.status(200).json({
                code: 200
            });
        } else {
            console.log("false");
            res.status(200).json({
                code : 204,
                errors: "wrong ID or password"
            });
        }

    } catch (error) {
        res.status(205).json({
            errors: "error"
        });
    }

}
exports.checkManager = async (req, res) => {
    const sessionId = req.headers.session;
    try {
        let accountId = await AccountId.getAccountId(sessionId);
        if (accountId == 0) {
            console.log('session_error');
            res.status(200).json({
                code : 201,
                errors: "session Error"
            });
            return;
        }
        let userId = await Manager.findUserId(accountId);
        if (userId == 0) {
            console.log('not register');
            res.status(200).json({
                code : 202,
                errors: "not register"
            });
            return;
        }
        let isManager = await Manager.checkManager(userId,sessionId);
        if (!isManager) {
            console.log('not manager');
            res.status(200).json({
                code : 203,
                errors: "not manager"
            });
            return;
        }

        res.status(200).json({
            code : 200
        });
    } catch (error) {
        res.status(205).json({
            errors: "error"
        });
    }
}