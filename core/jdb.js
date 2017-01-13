/**
 * Created by xang on 1/14/2017.
 */

"use strict";

var httpclient =require('./httpclient')();
var conf =require('../conf')();


function jdb() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];

        httpclient.call(conf.serverurl.jdb,function ok(stringhtml) {

            var startproint=stringhtml.indexOf('<b>USD</b>') - '<b>USD</b>'.length;
            var endproint=stringhtml.lastIndexOf('<!-- page -->');
            var newstringhtml=stringhtml.substring(startproint+"<tbody>".length,endproint);
            var spile=newstringhtml.split('</tr>');



            for (var i=0;i<spile.length-1;i++){

                var storerate={};
                var newspile=spile[i].split('<td style=" text-align: right; padding-right:20px;">');
                var curency=newspile[0].substring(newspile[0].indexOf('<b>')+'<b>'.length,newspile[0].lastIndexOf('</b>')).trim();
                var buy =newspile[1].substring(newspile[1].indexOf('">')+'">'.length,newspile[1].lastIndexOf('</span>')).trim();
                var sale =newspile[4].substring(newspile[1].indexOf('">')+'">'.length,newspile[1].lastIndexOf('</span>')).trim();

                storerate[lablearray[0]]=curency.trim();
                storerate[lablearray[1]]=buy.trim();
                storerate[lablearray[2]]=sale.trim();

                storeratearray.push(storerate);
            }

            okcallback(storeratearray);

        },function error(err) {
            errorcallback(err);
        });

    }


}

module.exports =function () {
    return new jdb();
}