var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'topic_author'
});
db.connect();

module.exports = db;
