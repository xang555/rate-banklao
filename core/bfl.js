/**
 * Created by xang on 7/2/2016.
 */

/**
 * Created by xang on 7/2/2016.
 */

"use strict";

var httpclient =require('./httpclient')();
var conf=require('../conf')();
var promise =require('bluebird');

function bfl() {

    this.rateinfo=function () {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        return new promise(function (resolve, reject) {

            httpclient.call(conf.serverurl.bfl)
                .then(function (stringhtml) {

                    var startdatetproint=stringhtml.indexOf('<h4>@ ')+'<h4>@ '.length;
                    var enddateproint=stringhtml.indexOf('</h4>',startdatetproint);
                    var date=stringhtml.substring(startdatetproint,enddateproint).trim();

                    var startproint=stringhtml.indexOf('<div class="exrow col-xs-12">');
                    var endproint=stringhtml.indexOf('<div class="comment',startproint);
                    var newstringhtml=stringhtml.substring(startproint,endproint);
                    var spile=newstringhtml.split('<div class="exrow col-xs-12">');


                    for (var i=1;i<spile.length;i++){

                        var newsplite=spile[i].split("</div>");
                        var storerate={};
                        var curency=newsplite[0].substring(newsplite[0].indexOf('right;">')+'right;">'.length,newsplite[0].lastIndexOf('</span>'));
                        var buy=newsplite[1].substring(newsplite[1].lastIndexOf('col-xs-4">')+'col-xs-4">'.length,newsplite[1].length);
                        var sale=newsplite[2].substring(newsplite[2].lastIndexOf('col-xs-4">')+'col-xs-4">'.length,newsplite[2].length);

                        storerate[lablearray[0]]=curency.trim();
                        storerate[lablearray[1]]=buy.trim();
                        storerate[lablearray[2]]=sale.trim();

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
    return new bfl();
};