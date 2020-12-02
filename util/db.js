const mysql             = require('mysql');
const config = require('../config/db.json');
function CMysql() {
    this.user_db = mysql.createPool(config.test);
}

module.exports = new CMysql();