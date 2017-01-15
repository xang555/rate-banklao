/**
 * Created by xang on 7/2/2016.
 */

/**
 * Created by xang on 7/2/2016.
 */

"use strict";

var httpclient =require('./httpclient')();
var conf=require('../conf')();

function bfl() {

    this.rateinfo=function (okcallback, errorcallback) {

        var storeratearray=[];
        var lablearray=['Currency','Buy','Sale'];
        var labelrateinfo = ['Date','rate'];
        var rateinfo ={};

        httpclient.call(conf.serverurl.bfl,function ok(stringhtml) {


            var startdatetproint=stringhtml.indexOf('Exchange rates* (')+'Exchange rates* ('.length;
            var enddateproint=stringhtml.indexOf(')</h2>',startdatetproint);
            var date=stringhtml.substring(startdatetproint,enddateproint).trim();

            var startproint=stringhtml.indexOf("<div class='Row'>");
            var endproint=stringhtml.indexOf("<div class='clear'></div>");
            var newstringhtml=stringhtml.substring(startproint,endproint);
            var spile=newstringhtml.split("</div></div>");

            for (var i=0;i<spile.length-1;i++){

                var newsplite=spile[i].split("</div>");
                var storerate={};
                var curency=newsplite[0].substring(newsplite[0].lastIndexOf("alt=\"\"/>")+"alt=\"\"/>".length,newsplite[0].length);
                var buy=newsplite[1].substring(newsplite[1].lastIndexOf("'>")+"'>".length,newsplite[1].length);
                var sale=newsplite[2].substring(newsplite[2].lastIndexOf("'>")+"'>".length,newsplite[2].length);

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

    }

}

module.exports=function () {
    return new bfl();
};