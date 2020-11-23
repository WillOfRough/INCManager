const IncMysql = require('../util/db');
const serviceInfo = require('../config/service-code-config.json');
const crypto = require('crypto');

class Manager {
    async findUserId(account_id) {
        const connection = await IncMysql.user_db.getConnection();
        await connection.beginTransaction();
        try {
            let _query = 'SELECT * FROM user where account_id = ?';
            let _result = await connection.query(_query, account_id);
            if (_result[0].affectedRows==0) {
                throw "myException";
            }
            let user_id =_result[0][0].user_id;
            connection.release();
            return user_id;
        } catch (error) {
            connection.release();
            return 0;
        }
    }
    async checkManager(user_id,service_code){
        const connection = await IncMysql.user_db.getConnection();
        await connection.beginTransaction();
        try {
            let _query = 'SELECT * FROM ma_group where user_id = ? and service_id = ?';
            let _result = await connection.query(_query, [user_id,service_code]);
            let user_id =_result[0][0].user_id;
            connection.release();
            return true;
        } catch (error) {
            connection.release();
            return false;
        }
    }
    async registrationManager(userId,password){
        let _password = crypto.createHash('sha256').update(password).digest('base64');
        const connection = await IncMysql.user_db.getConnection();
        await connection.beginTransaction();
        try{
            let _query = 'INSERT INTO manager_info values (?,?)';
            let _result = await connection.query(_query, [userId,_password]);
            connection.release();
            if (_result) {
                return true;
            } else {
                return false;
            }
        }
        catch (error){
            console.log(error);
            connection.release();
            return false;
        }
    }
    async login(password){
        const connection = await IncMysql.user_db.getConnection();
        await connection.beginTransaction();
        try{
            let _query = '';
            let _result = await connection.query(_query, password);
            connection.release();
            if (_result) {
                return true;
            } else {
                return false;
            }
        }
        catch (error){

        }
    }

}
module.exports = new Manager();