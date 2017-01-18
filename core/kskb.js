
/**
 * Created by xang on 6/17/2016.
 */
"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();
var promise =require('bluebird');

function kskb() {

    this.rateinfo=function () {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale','Note','Bill','TT','CurrencyType'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        return new promise(function (resolve,reject) {

            httpclient.call(conf.serverurl.kskb)
                .then(function (stringhtml) {

                    var stardatetproint=stringhtml.indexOf("<div class='Col'>")+"<div class='Col'>".length;
                    var enddateproint=stringhtml.indexOf('</div>',stardatetproint);
                    var date=stringhtml.substring(stardatetproint,enddateproint).trim();

                    var startproint=stringhtml.indexOf('<td align="left" valign="middle" class="financial_ratio-sub-table">T/T</td>');
                    var endproint=stringhtml.indexOf('<td colspan="4" align="left" valign="middle" class="financial_ratio-detail-table textleft nobg">');
                    var newstringhtml=stringhtml.substring(startproint,endproint);
                    var spile=newstringhtml.split("</tr>");


                    for (var i=1;i<spile.length-1;i++){

                        var storerate={};
                        var buysubrate ={};
                        var salesubrate ={};


                        var newspile=spile[i].split("</td>");
                        var curencytype=newspile[0].substring(newspile[0].indexOf('">')+'">'.length,newspile[0].length).trim();
                        var curency=newspile[1].substring(newspile[1].indexOf('">')+'">'.length,newspile[1].length).trim();

                        for(var k =2 ; k<=6 ; k++){


                            var rateval = newspile[k].substring(newspile[k].indexOf('">')+'">'.length,newspile[k].length).trim();
                            if (k ==2 || k == 3 || k==4 ){

                                if (k==2){
                                    buysubrate[lablearray[3]] = rateval;
                                }else  if (k==3){
                                    buysubrate[lablearray[4]] = rateval;
                                }else if (k==4){
                                    buysubrate[lablearray[5]] = rateval;
                                }

                            }else if (k ==5 || k==6){

                                if (k==5){
                                    salesubrate[lablearray[3]] = rateval;
                                }else  if (k==6){
                                    salesubrate[lablearray[5]] = rateval;
                                }
                            }

                        }

                        storerate[lablearray[6]] =curencytype;
                        storerate[lablearray[0]]=curency;
                        storerate[lablearray[1]]=buysubrate;
                        storerate[lablearray[2]]=salesubrate;

                        storeratearray.push(storerate);
                    }


                    rateinfo[labelrateinfo[0]] = date;
                    rateinfo[labelrateinfo[1]] = storeratearray;
                    resolve(rateinfo);


                }).catch(function (err) {
                reject(err);
                });

        });

    }

}//class cur string

module.exports=function () {
    return new kskb();
};
