/**
 * Created by xang on 1/14/2017.
 */

"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();

function mhjb() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        httpclient.call(conf.serverurl.mhjb,function ok(stringhtml) {

            var startdateproint=stringhtml.indexOf('Disclaimer: valid on ')+'Disclaimer: valid on '.length;
            var enddateproint=stringhtml.indexOf('</td>',startdateproint);
            var date=stringhtml.substring(startdateproint,enddateproint).trim();

            var startproint=stringhtml.indexOf('<td class="column-4">Sell</td>');
            var endproint=stringhtml.indexOf('<tr class="row-9">');
            var newstringhtml=stringhtml.substring(startproint+"<tbody>".length,endproint);
            var spile=newstringhtml.split('</tr>');

            for (var i=1;i<spile.length-1;i++){
                var storerate={};
                var newspile=spile[i].split("</td>");

                for(var k =1 ;k<=3;k++){
                    var rateval=newspile[k].substring(newspile[k].indexOf('">')+'">'.length,newspile[k].length).trim();
                    if (k==1){
                        storerate[lablearray[0]]=rateval;
                    }else if (k==2){
                        storerate[lablearray[1]]=rateval;
                    }else if (k==3){
                        storerate[lablearray[2]]=rateval;
                    }
                }

                storeratearray.push(storerate);
            }

            rateinfo[labelrateinfo[0]] = date;
            rateinfo[labelrateinfo[1]] = storeratearray;
            okcallback(rateinfo);

        },function error(err) {
            errorcallback(err);
        });

    }

}//class cur string

module.exports=function () {
    return new mhjb();
};
