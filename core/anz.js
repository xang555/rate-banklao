/**
 * Created by xang on 1/14/2017.
 */

"use strict";

var conf=require('../conf')();
var httpclient =require('./httpclient')();
var promise =require('bluebird');

function anz() {

    this.rateinfo=function () {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale','IMT_TT','Travel_Card_Chq','Notes'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        return new promise(function (resolve, reject) {

            httpclient.call(conf.serverurl.anz)
                .then(function (stringhtml) {


                    var startdateindex =stringhtml.indexOf(', current at')+', current at'.length;
                    var lastdateindex =stringhtml.indexOf('.',startdateindex);
                    var date = stringhtml.substring(startdateindex,lastdateindex);

                    var startindex =stringhtml.indexOf('<tr class="OddRow" >');
                    var lastindex =stringhtml.lastIndexOf('<td class="tblFooterLeft"></td>');
                    var ratehtml = stringhtml.substring(startindex,lastindex);
                    var ratearrayhtml = ratehtml.split('</tr>');

                    for(var i =0 ;i < ratearrayhtml.length-1;i++){

                        var storerate = {};
                        var buysubrate = {};
                        var salesubrate ={};

                        var curencyhtml = ratearrayhtml[i].split('</td>');
                        var curency = curencyhtml[2].substring(curencyhtml[2].indexOf('">')+'">'.length,curencyhtml[2].length).trim();

                        for(var k =3 ; k <=8 ; k++){

                            var rateval = curencyhtml[k].substring(curencyhtml[k].indexOf('&nbsp;')+'&nbsp;'.length,curencyhtml[k].length).trim();

                            if (k ==3 || k == 4 || k == 5){

                                buysubrate[lablearray[k]] = rateval;

                            } if (k ==6 || k == 7 || k == 8){

                                if (k == 6){
                                    salesubrate[lablearray[3]] = rateval;
                                }else  if ( k ==7 ){
                                    salesubrate[lablearray[4]] = rateval;
                                }else if (k == 8){
                                    salesubrate[lablearray[5]] = rateval;
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

module.exports=function () {
    return new anz();
};