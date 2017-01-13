/**
 * Created by xang on 6/17/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();

function bcel() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];

        httpclient.call(conf.serverurl.bcel,function ok(stringhtml) {

            var startproint=stringhtml.indexOf("<tbody>");
            var endproint=stringhtml.indexOf("</table>");
            var newstringhtml=stringhtml.substring(startproint+"<tbody>".length,endproint);
            var spile=newstringhtml.split("</tr><tr>");

            for (var i=0;i<spile.length;i++){
                var newspile=spile[i].split("</td>");
                var storerate={};
                var curency=newspile[0].substring(newspile[0].indexOf("/>")+"/>".length,newspile[0].length);
                var buy=newspile[1].substring(newspile[1].indexOf("'>")+"'>".length,newspile[1].length);
                var sale=newspile[2].substring(newspile[2].indexOf("'>")+"'>".length,newspile[2].length);

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

}//class cur string

module.exports=function () {
    return new bcel();
};
