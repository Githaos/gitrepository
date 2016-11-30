/*
 * 数据库连接配置模块 
 */
var mysql = require('mysql') ;
//connection config
var connection = mysql.createConnection({
    host : '123.57.7.131',
    user : 'user1',
    password : '123456',
    database : 'itcast'
});
module.exports = connection;

