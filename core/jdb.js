/**
 * Created by xang on 1/14/2017.
 */

"use strict";

var httpclient =require('./httpclient')();
var conf =require('../conf')();
var promise =require('bluebird');


function jdb() {

    this.rateinfo=function () {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale','Note','TC_SB_TT'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};


        return new promise(function (resolve, reject) {

            httpclient.call(conf.serverurl.jdb)
                .then(function (stringhtml) {


                    var startdateproint=stringhtml.indexOf('ວັນທີ:') + 'ວັນທີ:'.length;
                    var enddateproint=stringhtml.indexOf('</td>',startdateproint);
                    var date=stringhtml.substring(startdateproint,enddateproint).trim();

                    var startproint=stringhtml.indexOf('<b>USD</b>') - '<b>USD</b>'.length;
                    var endproint=stringhtml.lastIndexOf('<!-- page -->');
                    var newstringhtml=stringhtml.substring(startproint+"<tbody>".length,endproint);
                    var spile=newstringhtml.split('</tr>');

                    for (var i=0;i<spile.length-1;i++){

                        var storerate={};
                        var buysubrate ={};
                        var salesubrate ={};

                        var newspile=spile[i].split('<td style=" text-align: right; padding-right:20px;">');
                        var curency=newspile[0].substring(newspile[0].indexOf('<b>')+'<b>'.length,newspile[0].lastIndexOf('</b>')).trim();
                        for (var k =1 ; k <=4 ; k++){

                            var rateval = newspile[k].substring(newspile[k].indexOf('">')+'">'.length,newspile[k].lastIndexOf('</span>')).trim();
                            if (k ==1 || k == 2){

                                if (k==1){
                                    buysubrate[lablearray[3]] = rateval;
                                }else  if (k==2){
                                    buysubrate[lablearray[4]] = rateval;
                                }

                            }else if (k ==3 || k==4){

                                if (k==3){
                                    salesubrate[lablearray[4]] = rateval;
                                }else  if (k==4){
                                    salesubrate[lablearray[3]] = rateval;
                                }
                            }

                        }

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

}

new jdb().rateinfo().then(function (rate) {
    console.dir(rate);
}).catch(function (err) {
    console.dir(err);
})

module.exports =function () {
    return new jdb();
}