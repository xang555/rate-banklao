
/**
 * Created by xang on 6/17/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();

function kskb() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];

        httpclient.call(conf.serverurl.kskb,function ok(stringhtml) {

            var startproint=stringhtml.indexOf('<td align="left" valign="middle" class="financial_ratio-sub-table">T/T</td>');
            var endproint=stringhtml.indexOf('<td colspan="4" align="left" valign="middle" class="financial_ratio-detail-table textleft nobg">');
            var newstringhtml=stringhtml.substring(startproint,endproint);
            var spile=newstringhtml.split("</tr>");

            for (var i=1;i<spile.length-1;i++){

                var storerate={};
                var newspile=spile[i].split("</td>");
                  var curency=newspile[1].substring(newspile[1].indexOf('">')+'">'.length,newspile[1].length).trim();
                var buy=newspile[2].substring(newspile[2].indexOf('">')+'">'.length,newspile[2].length).trim();
                var sale=newspile[5].substring(newspile[5].indexOf('">')+'">'.length,newspile[5].length).trim();

                storerate[lablearray[0]]=curency;
                storerate[lablearray[1]]=buy;
                storerate[lablearray[2]]=sale;

                storeratearray.push(storerate);
            }

            okcallback(storeratearray);

        },function error(err) {
            errorcallback(err);
        });

    }

}//class cur string


module.exports=function () {
    return new kskb();
};
