if (typeof define !== 'function') {var define = require('amdefine')(module);}
define(function (require) {
	var _connInfo = require('../config/db.json');
	var _mysql = require('mysql');
	var _conPool = null;
	var _connection = null;
	var _nacl = require('tweetnacl');
	var _naclutil = require('tweetnacl-util');

	var datactrl = {
		initPool: function () {
			var newOpt = _connInfo.test;
			newOpt["connectionLimit"] = 400;
			newOpt["connectTimeout"] = 60 * 1000;
			newOpt["acquireTimeout"] = 60 * 1000;
			newOpt["timeout"] = 60 * 1000;
			_conPool = _mysql.createPool(newOpt);
		},

		dbQueryPool: function (q, a, f, r, e) {
			_conPool.query(q, a, function (err, rslt) {
				if (err) {
					console.log('[512] DB QUERY ERROR : '+err);
					if (r) {
						r.sendStatus(512);
					}
				}
				else if (f(rslt) == false) {
					console.log('FAILED DB result: '+rslt);
					if (r) {
						r.json({"rslt":rslt, "err":err});
					}
					if (e) {
						e({"rslt":rslt, "err":err});
					}
				}
			});
		},
		
		dbPoolCon: function (onCon) {
			_conPool.getConnection(function(err, connection) {
				if (err) {
					console.log("DB CONN ERROR :"+err);
				}
				else if (onCon) {
					onCon(connection);
				}
			});
		},

		dbQueryPoolWith: function (c, q, a, f, r, e) {
			c.query(q, a, function (err, rslt) {
				if (err) {
					console.log('[512] DB QUERY ERROR : '+err);
					r.sendStatus(512);
					c.release();
				}
				else if (f(rslt) == false) {
					console.log('FAILED DB result: '+rslt);
					r.json({"rslt":rslt, "err":err});
					if (e) {
						e({"rslt":rslt, "err":err});
					}
					c.release();
				}
			});
		},

		makeUTCDate: function (aryUTC) {
			return Date.UTC(aryUTC[0], aryUTC[1]-1, aryUTC[2], aryUTC[3], aryUTC[4], aryUTC[5]);
		}
	};

	return datactrl;
});

