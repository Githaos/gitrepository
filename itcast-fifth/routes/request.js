/**
 * Created by cena on 2016/4/19.
 */
var express = require('express'),
    router = express.Router(),
    poster=require('http-poster');


router.get('/request', function (req, res) {
    poster.get('http://127.0.0.1:3001/pro/1',function(err,result,data){
        console.log(result);
        console.log(data);
        res.send(data);
    });
});
router.post('/request', function (req, res) {
    var data={photo:"img/goodsList/goods8.jpg",price:"688",describe:"产品描述",name:"修身风衣_001"};
    var json=JSON.stringify(data);
    console.log(json);
    poster.post('http://127.0.0.1:3001/pro',json,function(err,data){
        console.log(data);
        res.send(data);
    });
});
module.exports=router;