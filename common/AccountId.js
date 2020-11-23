const fetch = require("node-fetch");

class AccoundId {
    async getAccountId(sessionId) {
        try {
            let accoundId = "";
            let getUserInfoUrl = 'https://dev-api.malangmalang.com/accounts/v1/sessions';
            await fetch(getUserInfoUrl, {
                method: 'GET',
                headers: {
                    'x-mplatform-api-sid': sessionId
                }
            })
                .then(response => response.json())
                .then(response => {
                    accoundId = response.sessions[0].account_id;
                });

            return accoundId;
        } catch (error) {
            return 0;
        }
    }
}
module.exports = new AccoundId();