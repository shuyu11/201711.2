/**
 * Created by lenovo on 2017/11/2.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection=mysql.createPool({
    url:'localhost',
    user:'root',
    password:'123456',
    database:'baobei'
})
/* GET users listing. */
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var a=req.body.a;
    var b=req.body.b;
    var c=req.body.c;
    var d=req.body.d;
    connection.query(`INSERT INTO mode (title,data,writer,content,uid) VALUES ('${a}','${b}','${c}','${d}','${e})`,function(err,rows,files){

    })
});
router.post('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query("SELECT * FROM mode",function(err,rows,files){
        res.send(rows)

    })
});
module.exports = router;

