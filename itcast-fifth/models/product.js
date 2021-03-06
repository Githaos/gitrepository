/**
 * Created by cena on 2016/4/18.
 */
var connection = require('./db.js');
var uuid = require('node-uuid');

function Product(product){
    this.id=product.id;
    this.photo=product.photo;
    this.price=product.price;
    this.describe=product.describe;
    this.name=product.name;
}
Product.getProByid=function(id,callback){
    var selectSql = 'SELECT * FROM product WHERE id =?';
    connection.query(selectSql, [id], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        console.log('Get product success'+res);
        console.dir(res);
        callback(err, res);
    });
}
Product.deletProByid=function(id,callback){
    var delSql = 'DELETE FROM product WHERE id=?';
    connection.query(delSql, [id], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
       // console.log('Get product success'+res);
        //console.dir(res);
        callback(err, res);
    });
}
Product.updateProByid=function(product,callback){
    var delSql = 'UPDATE product SET price =? WHERE id=?';
    connection.query(delSql, [product.price,product.id], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        // console.log('Get product success'+res);
        //console.dir(res);
        callback(err, res);
    });
}
Product.savePro=function(product,callback){
    var id=uuid.v1();
    var saveSql='INSERT INTO product (id,photo,price,describes,pro_name) VALUES (?,?,?,?,?)';
      connection.query(saveSql, [id,product.photo,product.price,product.describe,product.name], function (err, res) {
        if (err) {
            console.log('getProByid err:' + err);
            return;
        }
        // console.log('Get product success'+res);
        //console.dir(res);
        callback(err, res);
    });


}

module.exports=Product;