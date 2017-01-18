/**
 * Created by xang on 1/18/2017.
 */

var rate =require('./index');
var util =require('util');

rate.ldb().then(function (rate) {
    console.log(util.inspect(rate, false, null));
}).catch(function (err) {
    console.log(err);
});