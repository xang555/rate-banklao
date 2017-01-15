/**
 * Created by xang on 6/17/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();

function bcel() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','CurrencyCode','Buy','Sale','Note','Bill','Efi'];
        var lablerateinfo =['date','rate'];
        var rateinfo={};

        httpclient.call(conf.serverurl.bcel,function ok(stringhtml) {

            //get date
            var startdatepoint = stringhtml.indexOf('ປະຈໍາວັນທີ:') + 'ປະຈໍາວັນທີ:'.length;
            var enddatepoint = stringhtml.lastIndexOf('</strong></label>');
            var date = stringhtml.substring(startdatepoint,enddatepoint).trim();
             rateinfo[lablerateinfo[0]] = date;

            //get rate information
            var startproint=stringhtml.indexOf("<tbody>");
            var endproint=stringhtml.indexOf("</table>");
            var newstringhtml=stringhtml.substring(startproint+"<tbody>".length,endproint);
            var spile=newstringhtml.split("</tr>");

            for (var i=0;i<spile.length -1 ;i++){
                var storerate={};
                var buysubrate ={};

                var newspile=spile[i].split("</td>");

                for(var k =0 ;k < newspile.length ; k++){

                    var rateval=newspile[k].substring(newspile[k].indexOf('">')+'">'.length,newspile[k].length).trim();

                    if (k==0){
                        storerate[lablearray[0]]=rateval;
                    }else if (k==2){
                        storerate[lablearray[1]]=rateval;
                    }
                    else if (k ==3 || k==4 ||k==5 || k==6){
                        rateval=newspile[k].substring(newspile[k].indexOf('>')+'>'.length,newspile[k].length).trim();
                        if (k==3) {
                            buysubrate[lablearray[4]] = rateval;
                        }else if (k==4){
                            buysubrate[lablearray[5]]=rateval;
                        }else if (k==5){
                            buysubrate[lablearray[6]]=rateval;
                        }else if (k==6){
                            storerate[lablearray[3]]=rateval;
                        }
                    }

                }

                storerate[lablearray[2]]=buysubrate;
                storeratearray.push(storerate);
            }

            rateinfo[lablerateinfo[1]] =storeratearray;

            okcallback(rateinfo);

        },function error(err) {
            errorcallback(err);
        });

    }

}//class cur string


module.exports=function () {
    return new bcel();
};
