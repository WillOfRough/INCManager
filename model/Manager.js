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
    async checkManager(user_id,session_id){
        const connection = await IncMysql.user_db.getConnection();
        await connection.beginTransaction();
        try {
            let _query = 'SELECT * FROM manager_info where user_id = ?';
            let _result = await connection.query(_query, user_id);
            connection.release();
            if (_result[0].affectedRows==0) {
                throw "myException";
            }
            if(_result[0][0].session_id == session_id){
                return true;
            }
            else{
                return false;
            }
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
    async login(userId,password){
        let _password = crypto.createHash('sha256').update(password).digest('base64');
        const connection = await IncMysql.user_db.getConnection();
        await connection.beginTransaction();
        try{
            let _query = 'SELECT * FROM manager_info where user_id = ?';
            let _result = await connection.query(_query, [userId]);
            connection.release();
            if (_result[0].affectedRows==0) {
                return false;
            } else {
                if(_result[0][0].ma_password == _password){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
        catch (error){
            connection.release();
            console.log(error);
            return false;
        }
    }
    async updateSession(userId,session_id){
        const connection = await IncMysql.user_db.getConnection();
        await connection.beginTransaction();
        try{
            let _query = 'UPDATE manager_info set session_id = ?  where user_id = ?';
            let _result = await connection.query(_query, [session_id,userId]);
            connection.release();
            if (_result[0].affectedRows==0) {
                return false;
            } else {
                return true;
            }
        }
        catch (error){
            connection.release();
            console.log(error);
            return false;
        }
    }
}
module.exports = new Manager();