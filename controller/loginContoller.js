const fetch = require("node-fetch");
const AccountId = require("../common/AccountId");
const Manager = require("../model/Manager");

exports.registration = async (req, res) => {
    const userId = req.body.password;
    const password = req.body.password;

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

exports.checkManager = async (req, res) => {
    const sessionId = req.headers.session;
    const serviceCode = req.headers.service_code;
    const _userId = req.session.userId;

    try {
        let accountId = await AccountId.getAccountId(sessionId);
        console.log("accountId : " + accountId);
        if (accountId == 0) {
            console.log('session_error');
            res.status(204).json({
                errors: "session Error"
            });
            return;
        }
        let userId = await Manager.checkManager(accountId, serviceCode);
        if (userId) {
            if (userId == _userId) {
                res.status(200).json({
                    code: 200
                });
            }
        } else {
            res.status(203).json({
                errors: "not manager"
            });
        }

    } catch (error) {
        res.status(205).json({
            errors: "error"
        });
    }
}