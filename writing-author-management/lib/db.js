var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rla993',
    database: 'topic_author'
});
db.connect();

module.exports = db;