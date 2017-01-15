/**
 * Created by xang on 6/30/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();


function psb() {
    
    this.rateinfo=function (okcallback, errorcallback) {
        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};


        httpclient.call(conf.serverurl.psb,function ok(stringhtml) {
            //get date
            var startdateproint=stringhtml.indexOf("ວັນທີ")+"ວັນທີ".length;
            var enddateproint=stringhtml.indexOf('</td>',startdateproint);
            var date=stringhtml.substring(startdateproint,enddateproint).trim();
            //get rate information
            var startproint=stringhtml.indexOf("height=\"28\" >");
            var endproint=stringhtml.lastIndexOf("</table> ",(stringhtml.length-1)-startproint);
            var newstringhtml=stringhtml.substring(startproint+("height=\"28\" >".length),endproint);
            var spile=newstringhtml.split("height=\"28\" >");

            for (var i=0;i<spile.length;i++){
                var newspile=spile[i].split("</td>");
                var storerate={};
                var curency=newspile[0].substring(newspile[0].indexOf("normal\">")+"normal\">".length,newspile[0].lastIndexOf("</span>"));
                var buy=newspile[1].substring(newspile[1].indexOf("normal \"   >")+"normal \"   >".length,newspile[1].length);
                var sale=newspile[2].substring(newspile[2].indexOf("normal\"  >")+"normal\"  >".length,newspile[2].length);
                storerate[lablearray[0]]=curency.trim();
                storerate[lablearray[1]]=buy.trim();
                storerate[lablearray[2]]=sale.trim();

                storeratearray.push(storerate);
            }
            rateinfo[labelrateinfo[0]] = date;
            rateinfo[labelrateinfo[1]] = storeratearray;
            okcallback(rateinfo);
        },function error(err) {
            errorcallback(err);
        });

    } //rateinfo
    
}

module.exports=function () {
    return new psb();
}
